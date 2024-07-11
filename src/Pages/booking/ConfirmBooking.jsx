import { usePaystackPayment } from "react-paystack";
import { configure } from "../../constants/paystack";
import { user } from "../../layouts/constants"

const ConfirmBooking = ({ data = [] }) => {
    const name = data.find(i => i.label.toString().toLowerCase() === 'full name')
    const email = user.email;
    const config = configure({
        name,
        email,
    })

    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);
    return (
        <>
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
                        onClick={() => initializePayment({
                            onClose, onSuccess
                        })}
                        className='max-w-[12rem] text-sm p-1 px-2 bg-brand-red rounded mx-auto'>Proceed</button>
                </div>
            </div>
        </>
    )
}

export default ConfirmBooking

const Item = ({ value, label, }) =>
    <div className='grid w-full'>
        <strong>{label} </strong>
        <span className="">{value} </span>
    </div>