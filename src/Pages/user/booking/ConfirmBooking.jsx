import apiClient from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../../component/Loader";
import { useState } from "react";

const ConfirmBooking = ({ data = [], id }) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const info = {}
    data.forEach(el => {
        const { name, value } = el;
        info[name] = value
    })


    // you can call this function anything
    const onSuccess = async (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log("closed");
    };


    const submitBooking = async () => {
        setLoading(true)
        try {

            const { message } = await apiClient.post('booking/book', { json: { ...info } }).json()
            setLoading(false)
            toast.success(message)
            setTimeout(() => {
                navigate('/user/bookings')
            }, 1000)


        } catch (error) {

            toast.error(error.message)
            toast.error(error.response.json().message)
        }

    }
    return (
        <>
            {loading && <Loader />}

            <div className='grid gap-5 p-5 md:px-10'>

                <div className='flex flex-col gap-5 !px-0 w-full'>
                    {
                        data.map((d, idx) => <Item {...d} key={idx} />)
                    }
                </div>



                <div className='grid gap-5 w-full *:w-full !px-0 text-center'>
                    <button type="button"
                        onClick={submitBooking}
                        className='max-w-[12rem] text-sm p-2 px-4 bg-brand-red text-white rounded mx-auto'>Proceed</button>
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