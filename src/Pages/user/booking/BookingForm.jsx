import { useState } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { toast } from "react-toastify";
import { useEffect } from "react";
import apiClient from "../../../utils/apiClient";
import { useAuth } from "../../../provders/AuthProvider";

const BookingForm = ({ onSubmit, booking }) => {
  const { useUser } = useAuth()
  const [services, setServices] = useState()
  const [brands, setBrands] = useState()
  const [fullName, setFullName] = useState(booking?.fullName ?? '');
  const [phoneNumber, setPhoneNumber] = useState(booking?.phoneNumber ?? useUser().phoneNumber ?? "");
  const [amount, setAmount] = useState(booking?.amount ?? "");
  const [location, setLocation] = useState(typeof booking?.location === 'string' ? booking?.location : "" ?? "");
  const [brand, setBrand] = useState(booking?.vehicle?.brand ?? '');
  const [vehicle, setVehicle] = useState(booking?.vehicle?._id ?? '');
  const [service, setService] = useState(booking?.service?._id ?? '');
  const [carType, setCarType] = useState(booking?.carType);
  const [paymentMethod, setPaymentMethod] = useState(booking?.paymentMethod ?? 'online');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(booking?.mode ?? 'drive-in')
  const modes = [
    {
      label: 'Drive in',
      value: 'drive-in'
    },
    {
      label: 'Pick up',
      value: 'pick-up'
    },
  ]

  const [vehicles, setVehicles] = useState(brands?.find(b => b._id === brand)?.vehicles?.map(({ model, _id, year }) => ({
    label: model,
    value: _id,
    year
  })))

  const getServices = async () => {
    const [ser, b] = await Promise.all([
      apiClient.get('service/all').json(),
      apiClient.get(`vehicle/brands/all`).json(),
    ])
    setBrands(b)
    setServices(ser)
  }

  useEffect(() => {
    setVehicles(brands?.find(b => b._id === (brand ?? booking?.vehicle?.brand))?.vehicles?.map(({ model, _id, year }) => ({
      label: model,
      value: _id,
      year
    })))
  }, [brand])

  useEffect(() => {
    const user = useUser()
    getServices()
    setFullName(
      booking?.fullName ??
      `${booking?.user?.fullName ?? user.fullName ?? ''}`
    )
    setPhoneNumber(booking?.phoneNumber ?? useUser().phoneNumber ?? "")
    setAmount(booking?.amount ?? '')
    setService(booking?.service?._id ?? '')
    setLocation(typeof booking?.location === 'string' ? booking?.location : "" ?? "")
    setBrand(booking?.vehicle?.brand ?? '')
    setVehicle(booking?.vehicle?._id ?? '')
    setPaymentMethod(booking?.paymentMethod ?? 'online')
    setMode(booking?.mode ?? 'drive-in')
    setLoading(false);
  }, [booking]);

  useEffect(() => {
    const selectedService = services?.find(s => s._id === service)

    if (selectedService) {
      const defaultPrice = selectedService.vehicles?.find(v =>
        v.vehicle === vehicle
      )?.price ?? selectedService.vehicles?.find(v => v.isDefault)?.price

      if (defaultPrice) {
        setAmount(defaultPrice.toString())
      }
    }
  }, [service, vehicle, services, brands, brand])

  useEffect(() => {
    const b = brands?.find(a => a._id === brand)
    const v = vehicles?.find(c => c.value === vehicle)
    console.log({ v, b, brand, vehicle, vehicles, brands })
    let name = `${b?.name ?? ''} ${v?.label ?? ''} ${v?.year ?? ''}`;
    name = name.replace('undefined', '').trim()

    setCarType(name)
  }, [brand, vehicle])

  const onsubmit = (form) => {
    form.preventDefault();

    if (
      !fullName?.length ||
      !carType?.length ||
      !paymentMethod?.length ||
      !phoneNumber?.length
    ) {
      return toast.error("Please fill in all the required fields.");
    }

    onSubmit(
      [
        { name: "fullName", label: "Full Name", value: fullName },
        { name: "phoneNumber", label: "Phone Number", value: phoneNumber },
        { name: "amount", label: "Amount", value: amount },
        { name: "location", label: "Location", value: mode === 'pick-up' ? location : undefined },
        { name: "brand", label: "Brand", value: brand },
        { name: "vehicle", label: "Vehicle", value: vehicle },
        { name: "service", label: "Service", value: service },
        { name: "carType", label: "Car Type", value: carType },
        { name: "paymentMethod", label: "Payment Method", value: paymentMethod },
        { name: "mode", label: "Mode of Delivery", value: mode },
      ]
    );
  };

  return (
    <>
      <form className="grid gap-5 !p-0 w-full" onSubmit={onsubmit}>
        <div className="flex flex-wrap md:flex-nowrap gap-x-2 gap-y-5">
          <Input
            label={"Full Name"}
            name={"fullName"}
            value={fullName}
            setValue={setFullName}
            error={""}
            required={true}
          />
          <Input
            label={"Phone Number"}
            name={"phoneNumber"}
            value={phoneNumber}
            setValue={setPhoneNumber}
            error={""}
            type='tel'
            required={true}
          />
        </div>

        <div className="grid">
          <small>
            The amount Here is Subject to change based on your Vehicle Model and Year
          </small>
          <Input
            label={"Amount ₦"}
            name={"amount"}
            value={amount}
            setValue={setAmount}
            error={""}
            type='amount'
            disabled={true}
            required={true}
          />
        </div>

        <Select
          label={"Service"}
          name={"service"}
          value={service}
          setValue={setService}
          error={""}
          options={services?.map(({ name, _id }) => ({
            label: name,
            value: _id
          }))}
          required={true}
        />

        <div className="flex flex-wrap md:flex-nowrap gap-x-2 gap-y-5">
          <Select
            label={"Vehicle Brand"}
            name={"brand"}
            value={brand}
            setValue={setBrand}
            error={""}
            options={brands?.map(({ name, _id }) => ({
              label: name,
              value: _id
            }))}
            required={true}
          />
          <Select
            label={"Vehicle"}
            name={"vehicle"}
            value={vehicle}
            setValue={setVehicle}
            error={""}
            options={vehicles}
            required={true}
          />
        </div>


        <div className="flex flex-wrap md:flex-nowrap gap-x-3 gap-y-5">
          <Select
            label={"Mode Of Delivery"}
            name={"mode"}
            value={mode}
            setValue={setMode}
            error={""}
            options={modes}
            required={true}
          />
          <Select
            label={"Payment Method"}
            name={"paymentMethod"}
            value={paymentMethod}
            setValue={setPaymentMethod}
            error={""}
            options={["cash", "online", "transfer"]}
            required={true}
          />
        </div>
        {
          mode === 'pick-up' && <Input
            label={"Location"}
            name={"location"}
            value={location}
            setValue={setLocation}
            error={""}
            required={true}
          />}

        <div className="my-5 w-full gap-5 !px-0 text-center">
          <button type="submit" disabled={loading} className="mx-auto rounded hover:scale-105 transition-all duration-200 hover:bg-opacity-75 bg-brand-red p-2 px-4 text-white w-full max-w-[15rem]">
            {booking?._id ? 'Continue' : "Book Now"}
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
