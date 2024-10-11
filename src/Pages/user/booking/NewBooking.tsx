import React, { useState } from "react";
import TitleHeader from "../../../components/TitleHeader";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import ConfirmBooking from "./ConfirmBooking";
import { useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";
import { useParams } from "react-router-dom";
import apiClient from "../../../utils/apiClient";
import { toast } from "react-toastify";

const NewBooking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const submit = (form) => {
    setData(form);
    setConfirm(true);
  };

  const [confirm, setConfirm] = useState(false);

  const getBooking = async () => {
    try {
      const [b] = await Promise.all([apiClient.get(`booking/${id}`).json()]);
      setBooking(b);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      toast.error(error.response.json().message);
    }
  };

  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      }),
    [confirm, id],
  );

  useEffect(() => {
    if (id) getBooking();
  }, [id]);

  return (
    <>
      <ScrollRestoration />

      <div className="mx-auto grid max-w-screen-sm overflow-clip rounded-lg shadow *:p-3 *:md:p-5">
        <div className="bg-brand-red text-white">
          <TitleHeader
            goBack={() => (confirm ? setConfirm(false) : navigate(-1))}
            title={confirm ? "Confirm details" : id ? id : "Book Now"}
          />
        </div>

        <div className="">
          {confirm ? (
            <ConfirmBooking data={data} id={id} />
          ) : (
            <BookingForm onSubmit={submit} booking={booking} />
          )}
        </div>
      </div>
    </>
  );
};

export default NewBooking;
