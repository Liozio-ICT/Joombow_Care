import { BiCalendarEvent, BiCar, BiDotsHorizontal, BiEdit, BiMapPin, BiTaskX, BiUser } from "react-icons/bi";
import ListItem from "./ListItem";
import Dropdown from "./Dropdown";
import apiClient from "../utils/apiClient";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa6";

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
}) => {

  const cancelBooking = async () => {
    // api call to cancel booking
    const response = await apiClient.post(`/bookings/${_id}/cancel`);
    const { booking } = response.json();
    if (response.ok && booking) {
      return toast.success('Booking cancelled successfully');
    }

    toast.error('Something went wrong');
  };

  return (
    <div className="rounded-xl bg-white p-3 md:px-5 shadow-md grid gap-2 list-none  relative *:items-start border-brand-red border-t">
      <Dropdown label={<BiDotsHorizontal />} className={'ms-auto'} justify="right" >
        <div className="grid">
          <button className="text-slate-800 hover:bg-slate-950/5 !text-xs *:pr-2">
            <ListItem icon={<FaEye size={16} />} label={'View'} to={`/bookings/${_id}`} />
          </button>
          <button className="text-blue-800 hover:bg-blue-950/5 !text-xs *:pr-2">
            <ListItem icon={<BiEdit size={16} />} label={'Edit'} to={`/bookings/${_id}/edit`} />
          </button>
          <button className="text-red-800 hover:bg-red-950/5 !text-xs *:pr-2">
            <ListItem icon={<BiTaskX size={16} />} label={'Cancel'} onClick={() => cancelBooking} />
          </button>
        </div>
      </Dropdown>
      <ListItem icon={<BiUser className="text-brand-red" size={24} />} label={fullName} />
      <ListItem icon={<BiCar className="text-brand-red" size={24} />} label={carType} />
      <ListItem icon={<BiMapPin className="text-brand-red" size={24} />} label={location} />
      <ListItem icon={<BiCalendarEvent className="text-brand-red" size={24} />} label={new Intl.DateTimeFormat('en').format(new Date(date))} />
    </div>
  )
}

export default BookingCard