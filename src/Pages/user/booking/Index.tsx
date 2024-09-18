import React from "react";
import { useState, useEffect } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import noDelivery from "../../../assets/no-delivery.svg";
import Tabs from "../../../components/Tabs";
import apiClient from "../../../utils/apiClient";
import { slugify } from "../../../utils/slugify";
import BookingCard from "../../../components/BookingCard";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa6";
import { getPayKey } from "../../../utils/paykey";

const Index = () => {
  const tabs = [
    {
      label: "All",
      href: "/user/bookings?tab=all",
    },
    {
      label: "Pending",
      href: "/user/bookings?tab=pending",
    },
    {
      label: "Completed",
      href: "/user/bookings?tab=completed",
    },
    {
      label: "Cancelled",
      href: "/user/bookings?tab=cancelled",
    },
  ];

  const [bookings, setBookings] = useState();
  const [key, setKey] = useState();

  const getBookings = async (type = "all") => {
    try {
      const [data, k] = await Promise.all([
        apiClient.get(`booking/mine?type=${type}`).json(),
        getPayKey(),
      ]);
      setBookings(data);
      setKey(k);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const [activeTab, setActiveTab] = useState(
    tabs.find(
      (tab) => tab.href === location.href.replace(location.origin, ""),
    ) ?? tabs[0],
  );

  useEffect(() => {
    getBookings(slugify(activeTab.label));
  }, [activeTab]);
  return (
    <>
      <ScrollRestoration />

      <div className="mb-5 flex w-full flex-wrap justify-between gap-2 text-sm">
        <h2 className="grow text-[150%] font-semibold">My Bookings</h2>
        <div>
          <Tabs
            activeTab={activeTab}
            tabs={tabs}
            activeClass="border-b border-current rounded-none text-brand-red"
            onchange={setActiveTab}
          />
        </div>
      </div>

      {!bookings?.bookings?.length && (
        <section className="flex min-h-[70dvh] items-center justify-center">
          <div className="mx-auto my-10 max-w-screen-sm grow rounded p-5 shadow md:p-10">
            <div className="mx-auto flex max-w-[75%] items-center justify-center !rounded-full">
              <img
                src={noDelivery}
                alt="back"
                className="aspect-square max-w-[5rem] object-contain"
              />
            </div>
            <div className="my-5 grid h-fit w-full gap-5 !px-0 text-center *:w-full">
              <div>
                <h3 className="text-[150%] font-semibold capitalize">
                  You’ve no booking history
                </h3>
                <small>
                  You’ve not book a wash today. place order soon.....{" "}
                </small>
              </div>
              <Link
                to="/user/bookings/new"
                className="mx-auto max-w-[12rem] rounded bg-brand-red p-2 px-4 text-sm text-white"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>
      )}
      <div className="relative grid min-h-[70dvh] grid-rows-[1fr_auto]">
        <div className="my-5 grid w-full grow grid-cols-[repeat(auto-fill,_minmax(min(20rem,_100%),_1fr))] gap-5 *:h-fit">
          {bookings?.bookings?.map((booking, idx) => (
            <BookingCard {...booking} key={idx} paykey={key} />
          ))}
        </div>
        {!!bookings?.bookings?.length && (
          <Link
            to="/user/bookings/new"
            className="sticky bottom-[5rem] right-0 ms-auto flex w-fit items-center justify-center gap-2 text-nowrap rounded-full bg-brand-red p-3 text-sm text-white shadow-lg md:bottom-[2rem]"
          >
            <span className="hidden md:block">Book Again</span>
            <FaPlus />
          </Link>
        )}
      </div>
    </>
  );
};

export default Index;
