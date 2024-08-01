import { BiCalendarEvent, BiCar, BiMapPin, BiUser } from "react-icons/bi";
import ListItem from "./ListItem";

const BookingCard = ({
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

  return (
    <div className="rounded-xl bg-white p-3 md:px-5 shadow-md grid gap-2 list-none  relative *:items-start border-brand-red border-t">
      <ListItem icon={<BiUser className="text-brand-red" size={24} />} label={fullName} />
      <ListItem icon={<BiCar className="text-brand-red" size={24} />} label={carType} />
      <ListItem icon={<BiMapPin className="text-brand-red" size={24} />} label={location} />
      <ListItem icon={<BiCalendarEvent className="text-brand-red" size={24} />} label={new Intl.DateTimeFormat('en').format(new Date(date))} />
    </div>
  )
}

export default BookingCard