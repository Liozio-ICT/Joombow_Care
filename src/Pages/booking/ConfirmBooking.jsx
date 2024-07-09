
const ConfirmBooking = ({ data = [] }) => {
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
                    <button type="submit" className='max-w-[12rem] text-sm p-1 px-2 bg-brand-red rounded mx-auto'>Proceed</button>
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