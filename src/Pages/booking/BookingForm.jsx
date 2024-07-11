import React, { useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";

const BookingForm = ({ onSubmit }) => {
  const onsubmit = (form) => {
    form.preventDefault();
    onSubmit([
      {
        value: name,
        name: "name",
        label: "Full name",
      },
      {
        value: phone,
        name: "phone",
        label: "Phone Number",
      },
      {
        value: location,
        name: "location",
        label: "Location",
      },
      {
        value: car_type,
        name: "car_type",
        label: "Car Type",
      },
      {
        value: payment_method,
        name: "payment_method",
        label: "Payment method",
      },
    ]);
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [car_type, setCarType] = useState("");
  const [payment_method, setPaymentMethod] = useState("");

  const cars = [
    "Saloon cars",
    "Saloon cars",
    "Saloon cars",
    "Saloon cars",
    "Saloon cars",
    "Saloon cars",
    "Saloon cars",
  ];

  const payments = [
    "Pay using Credit card",
    "Pay using Credit card",
    "Pay using Credit card",
    "Pay using Credit card",
  ];

  return (
    <>
      <form
        onSubmit={onsubmit}
        className="mx-auto my-5 flex flex-col gap-5 *:mx-auto md:my-10 md:max-w-[75%]"
      >
        <Input
          label={"Full name"}
          placeholder={""}
          name={"full_name"}
          value={name}
          setValue={setName}
          error={""}
        />
        <Input
          label={"Phone Number"}
          placeholder={""}
          name={"phone"}
          value={phone}
          setValue={setPhone}
          error={""}
        />
        <Input
          label={"Location"}
          placeholder={""}
          name={"location"}
          value={location}
          setValue={setLocation}
          error={""}
        />
        <Select
          label={"Car Type"}
          name={"car_type"}
          value={car_type}
          setValue={setCarType}
          error={""}
          options={Array(10).fill("Saloon cars")}
        />
        <Select
          label={"Payment method"}
          name={"payment_method"}
          value={payment_method}
          setValue={setPaymentMethod}
          error={""}
          options={Array(5).fill("Pay using Credit card")}
        />

        <div className="my-5 grid w-full gap-5 !px-0 text-center *:w-full">
          <button
            type="submit"
            className="mx-auto max-w-[12rem] rounded bg-brand-red p-1 px-2 text-sm"
          >
            Book Now
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
