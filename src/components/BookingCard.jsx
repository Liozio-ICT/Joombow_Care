import { BiCalendarEvent, BiCar, BiDotsHorizontal, BiEdit, BiMapPin, BiTaskX, BiUser } from "react-icons/bi";
import ListItem from "./ListItem";
import Dropdown from "./Dropdown";
import apiClient from "../utils/apiClient";
import { toast } from "react-toastify";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { configure } from "../utils/paystack";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { getPayKey } from "../utils/paykey";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useAuth } from "../provders/AuthProvider";

const BookingCard = ({
  _id,
  amount,
  fullName,
  phoneNumber,
  email,
  carType,
  location,
  paymentMethod,
  paymentStatus,
  status,
  date,
  paykey
}) => {
  const payKey = useRef()
  const { useUser } = useAuth()
  const navigate = useNavigate()
  useEffect(() => { }, [])
  const cancelBooking = async () => {
    // api call to cancel booking
    try {
      const { message } = await apiClient.put(`booking/${_id}/update-status`, {
        json: {
          status: 'pending-cancelled'
        }
      }).json();
      toast.success(message)
      toast.success('Booking cancelled successfully');

      navigate(0)

    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  // you can call this function anything
  const onSuccess = async (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    try {
      await apiClient.post(`booking/pay`, {
        json: {
          status: reference.status,
          ref: reference.reference,
          id: _id,
          method: 'online',
          amount: parseFloat(amount)
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
  const config = configure({ name: fullName, email: email ?? useUser().email, amount: amount * 100, key: payKey.current })

  useEffect(() => {
    getPayKey('paystack').then(k => payKey.current = k)
  }, [])
  return (
    <div className="rounded-xl bg-white p-3 md:px-5 shadow-md grid gap-2 list-none  relative *:items-start border-brand-red border-t">
      <Dropdown label={<BiDotsHorizontal />} className={'ms-auto'} justify="right" >
        <div className="grid text-nowrap">
          {status !== 'paid' && status !== 'completed' &&
            <PaystackButton
              className="text-slate-800 hover:bg-slate-950/5 !text-xs *:pr-2"
              {...config}
              onClose={() => onClose()}
              onSuccess={(e) => onSuccess(e)}
            >
              <ListItem icon={<FaMoneyBillTransfer size={16} />} label={'Pay'} />
            </PaystackButton>}
          <button className="text-blue-800 hover:bg-blue-950/5 !text-xs *:pr-2">
            <ListItem icon={<BiEdit size={16} />} label={'View / Edit'} to={`/user/bookings/${_id}`} />
          </button>
          <button className="text-red-800 hover:bg-red-950/5 !text-xs *:pr-2">
            <ListItem icon={<BiTaskX size={16} />} label={'Cancel'} onClick={cancelBooking} />
          </button>
        </div>
      </Dropdown>
      <span className="flex flex-wrap gap-x-2 mx-auto">
        <small>ID:</small>
        <strong>{_id} </strong>
      </span>
      <ListItem icon={<BiUser className="text-brand-red" size={24} />} label={fullName} />
      <ListItem icon={<BiCar className="text-brand-red" size={24} />} label={carType} />
      <ListItem icon={<BiMapPin className="text-brand-red" size={24} />} label={location?.name ?? location?.city ?? location?.state ?? location ?? 'Drive In'} />
      <ListItem icon={<BiCalendarEvent className="text-brand-red" size={24} />} label={new Intl.DateTimeFormat('en').format(new Date(date))} />
    </div>
  )
}

export default BookingCard