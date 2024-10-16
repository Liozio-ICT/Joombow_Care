import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import apiClient from "../../../utils/apiClient";
import { useNavigate } from "react-router-dom";
import Loader from "../../../component/Loader";
import { configure } from "../../../utils/paystack";
import { PaystackButton } from "react-paystack";
import { FaX } from "react-icons/fa6";
import { getPayKey } from "../../../utils/paykey";
import { cn } from "../../../utils/tailwind";
import { useAuth } from "../../../provders/AuthProvider";

const ConfirmBooking = ({ data = [], id }) => {
    const [loading, setLoading] = useState(false)
    const { useUser } = useAuth()
    const pay_form = useRef()
    const navigate = useNavigate()
    let info = {}
    data.forEach(el => {
        const { name, value } = el;
        info[name] = value
    })
    info.amount = parseFloat(info.amount)

    const payKey = useRef()

    // you can call this function anything
    const onSuccess = async (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        try {
            await apiClient.post(`booking/pay`, {
                json: {
                    status: reference.status,
                    ref: reference.reference,
                    id,
                    method: 'online',
                    amount: parseFloat(info.amount)
                }
            }).json();

            setTimeout(() => {
                navigate('/user/bookings')
            }, 1000)

        } catch (error) {
            toast.error(error.message)
            toast.error(error.response.json().message)
        }
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log("closed");
    };

    const submitBooking = async () => {
        setLoading(true)
        try {
            const { message } = !!id ?
                await apiClient.put(`booking/${id}`, { json: { ...info } }).json() :
                await apiClient.post('booking/book', { json: { ...info } }).json()
            setLoading(false)
            toast.success(message)

            if (!id) pay_form.current?.showModal()
            else
                setTimeout(() => {
                    navigate('/user/bookings')
                }, 1000)
        } catch (error) {
            toast.error(error.message)
            toast.error(error.response.json().message)
        }

    }


    const config = configure({ name: info.fullName, email: useUser().email, amount: info.amount * 100, key: payKey.current })

    useEffect(() => {
        getPayKey('paystack').then(k => payKey.current = k)
    }, [])
    const show = (label = '') => {
        const values = ['service', 'vehicle', 'brand', 'status', 'payment status', 'location']
        return !values.includes(label.toLowerCase())
    }

    return (
        <>
            {loading && <Loader />}

            <div className='grid gap-5 p-5 md:px-10'>

                <div className='flex flex-col gap-5 !px-0 w-full'>
                    {
                        data.map((d, idx) => show(d.label) && <Item {...d} key={idx} />)
                    }
                </div>



                <div className='grid gap-5 w-full *:w-full !px-0 text-center'>
                    <button type="button"
                        onClick={submitBooking}
                        className='max-w-[12rem] text-sm p-2 px-4 bg-brand-red text-white rounded mx-auto'>
                        Save
                    </button>
                </div>
            </div>


            <dialog
                id='pay_form'
                popover={true}
                ref={pay_form}
                className='rounded-xl overflow-clip overflow-y-auto'
            >
                <div
                    className={
                        cn([
                            "p-10 rounded-xl shadow bg-white w-[90dvw] md:max-w-[20rem] relative transition-all duration-500 grid gap-5 text-center",
                        ])
                    }
                >
                    <button onClick={() => { pay_form?.current?.close() }} className='absolute top-2 right-2 bg-transparent p-2 rounded'>
                        <FaX />
                    </button>

                    <h3 className="font-semibold" >Pay Now</h3>
                    <button
                        className="max-w-[12rem] text-sm p-2 px-4 bg-brand-red text-white rounded mx-auto w-[80%]"
                        onClick={() => pay_form.current?.close()}
                    >
                        <PaystackButton
                            {...config}
                            className="w-full"
                            onClose={onClose}
                            onSuccess={onSuccess}
                        >
                            Pay
                        </PaystackButton>
                    </button>
                </div>
            </dialog>
        </>
    )
}

export default ConfirmBooking

const Item = ({ value, label, }) =>
    <div className='grid w-full capitalize'>
        <strong>{label} </strong>
        <span className="">{value} </span>
    </div>