import { usePaystackPayment } from "react-paystack";
import { configure } from "../../constants/paystack";
import { ScrollRestoration } from "react-router-dom";
import apiClient from "../../utils/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";
import { useState } from "react";

const ConfirmBooking = ({ data = [] }) => {
    // const name = data.find(i => i.label.toString().toLowerCase() === 'full name')
    // const amount = data.find(i => i.label.toString().toLowerCase() === 'amount') ?? 30000
    // const email = user.email;
    // const config = configure({
    //     email,
    //     amount,
    // })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // you can call this function anything
    // const onSuccess = (reference) => {
    //     // Implementation for whatever you want to do with reference and after success call.
    //     console.log(reference);
    // };

    // you can call this function anything
    // const onClose = () => {
    //     // implementation for  whatever you want to do when the Paystack dialog closed.
    //     console.log('closed')
    // }

    // const initializePayment = usePaystackPayment(config);

    const submitBooking = async () => {
        setLoading(true)
        const info = {}
        data.forEach(el => {
            const { name, value } = el;
            info[name] = value
        })
        const response = await apiClient.post('/booking/book', { ...data })
        setLoading(false)
        const { message } = await response.json()

        if (response.ok) {
            toast.success(message)
            navigate('/dashboard/bookings')
        }
        else toast.error(message)
        // initializePayment({
        //     onClose, onSuccess
        // })
    }
    return (
        <>
            <ScrollRestoration />

            {loading && <Loader />}

            <div className='mx-auto *:mx-auto md:max-w-[75%] my-5 md:my-10 flex-col flex gap-5 md:gap-10  *:rounded'>
                <div className='bg-brand-red min-h-[4rem] w-full mx-5'>

                </div>

                <div className='flex flex-col gap-5 !px-0 w-full'>
                    {
                        data.map((d, idx) => <Item {...d} key={idx} />)
                    }
                </div>



                <div className='grid gap-5 w-full *:w-full !px-0 text-center'>
                    <button type="button"
                        onClick={() => submitBooking}
                        className='max-w-[12rem] text-sm p-1 px-2 bg-brand-red rounded mx-auto'>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default ConfirmBooking

const Item = ({ value, label, }) =>
    <div className='grid w-full capitalize'>
        <strong>{label} </strong>
        <span className="">{value} </span>
    </div>