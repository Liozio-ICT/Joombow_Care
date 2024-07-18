import { FaCalendar, FaCar, FaMap, FaUser } from "react-icons/fa";
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
    <div className="rounded-xl bg-white p-3 bg-opacity-5 shadow-md grid gap-2 list-none">
      <ListItem icon={<FaUser />} label={fullName} />
      <ListItem icon={<FaCar />} label={carType} />
      <ListItem icon={<FaMap />} label={location} />
      <ListItem icon={<FaCalendar />} label={date} />
    </div>
  )
}

export default BookingCard