import React, { useState } from 'react'
import TitleHeader from '../../components/TitleHeader'
import { useNavigate } from 'react-router-dom'
import BookingForm from './BookingForm'
import ConfirmBooking from './ConfirmBooking'

const NewBooking = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const submit = (form) => {
        setData(form)
        setConfirm(true)
    }

    const [confirm, setConfirm] = useState(false)

    return (

        <>
            <div className="!pt-10 md:bg-transparent md:!pt-5">
                <TitleHeader goBack={() => confirm ? setConfirm(false) : navigate(-1)} title={confirm ? 'Confirm details' : 'Bookings'} />
            </div>

            {
                confirm ?
                    <ConfirmBooking data={data} /> :
                    <BookingForm onSubmit={submit} />
            }
        </>
    )
}

export default NewBooking