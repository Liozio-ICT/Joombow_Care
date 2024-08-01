import React, { useState } from "react";
import TitleHeader from "../../../components/TitleHeader";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmBooking from "./ConfirmBooking";
import { useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";

const NewBooking = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const submit = (form) => {
    setData(form);
    setConfirm(true);
  };

  const [confirm, setConfirm] = useState(false);

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      }),
    [confirm],
  );

  return (
    <>
      <ScrollRestoration />

      <div className="mx-auto grid max-w-screen-sm overflow-clip rounded-lg shadow *:p-3 *:md:p-5">
        <div className="bg-brand-red text-white">
          <TitleHeader
            goBack={() => (confirm ? setConfirm(false) : navigate(-1))}
            title={confirm ? "Confirm details" : "Book Now"}
          />
        </div>

        <div className="">
          {confirm ? (
            <ConfirmBooking data={data} />
          ) : (
            <BookingForm onSubmit={submit} data={data} />
          )}
        </div>
      </div>
    </>
  );
};

export default NewBooking;
