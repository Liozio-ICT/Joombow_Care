import { useState, useEffect } from "react";
import { Link, useNavigate, ScrollRestoration } from "react-router-dom";
import TitleHeader from "../../components/TitleHeader";
import noDelivery from "../../assets/no-delivery.svg";
import Tabs from "../../components/Tabs";
import apiClient from "../../utils/apiClient";
import BookingCard from "../../components/BookingCard";
import { toast } from "react-toastify";

const Index = () => {
  const tabs = [
    {
      label: "All",
    },
  ];

  const navigate = useNavigate();
  const [bookings, setBookings] = useState();

  const getBookings = async () => {
    const response = await apiClient.get("/booking/mine");
    const data = await response.json();
    if (response.ok) {
      return setBookings(data);
    }

    toast.error(data.message);
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <ScrollRestoration />

      <div className="bg-[#FD1014] !pt-10 md:bg-transparent md:!pt-5">
        <TitleHeader title="My Bookings" />
      </div>

      <div className="mx-auto my-5 flex flex-col gap-5 *:mx-auto md:my-10 md:max-w-[75%] md:gap-10">
        <div className="w-full text-sm">
          <Tabs tabs={tabs} activeClass="bg-white text-black" />
        </div>

        {!bookings?.length && (
          <>
            <div className="aspect-square max-w-[75%] !rounded-full">
              <img
                src={noDelivery}
                alt="back"
                className="aspect-square max-w-[5rem] object-contain"
              />
            </div>

            <div className="grid w-full gap-5 !px-0 text-center *:w-full">
              <p>You’ve no booking history</p>
              <p>You’ve not book a wash today. place order soon..... </p>
              <Link
                to="/dashboard/bookings/new"
                className="mx-auto max-w-[12rem] rounded bg-brand-red p-1 px-2 text-sm"
              >
                Book Now
              </Link>
            </div>
          </>
        )}
        <div className="grid w-full grid-cols-[repeat(auto-fill,_minmax(min(15rem,_100%),_1fr))]">
          {bookings?.map((booking, idx) => (
            <BookingCard {...booking} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
