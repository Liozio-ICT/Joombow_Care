import React from "react";
import TitleHeader from "../../components/TitleHeader";
import noDelivery from "../../assets/no-delivery.svg";
import Tabs from "../../components/Tabs";
import { Link, useNavigate } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../../utils/apiClient";

const Index = () => {
  const tabs = [
    {
      label: "All",
    },
  ];

  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    apiClient.get("/booking/mine").then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          const { bookings } = data;
          setBookings(bookings);
        });
      }
    });
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
      </div>
    </>
  );
};

export default Index;
