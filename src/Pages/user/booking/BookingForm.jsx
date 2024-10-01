import { useState } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { toast } from "react-toastify";
import { useEffect } from "react";
import apiClient from "../../../utils/apiClient";

const BookingForm = ({ onSubmit, booking }) => {


  const [services, setServices] = useState()
  const [brands, setBrands] = useState()

  const [fullName, setFullName] = useState(booking?.fullName ?? '');
  const [phoneNumber, setPhoneNumber] = useState(booking?.phoneNumber ?? booking?.user?.phoneNumber ?? "");
  const [amount, setAmount] = useState(booking?.amount ?? "");
  const [location, setLocation] = useState(booking?.location?._id ?? "");
  const [email, setEmail] = useState(booking?.email ?? booking?.user?.email ?? "");
  const [status, setStatus] = useState(booking?.status ?? "");
  const [brand, setBrand] = useState(booking?.vehicle?.brand ?? '');
  const [vehicle, setVehicle] = useState(booking?.vehicle?._id ?? '');
  const [service, setService] = useState(booking?.service?._id ?? '');
  const [carType, setCarType] = useState(booking?.carType);
  const [paymentMethod, setPaymentMethod] = useState(booking?.paymentMethod);
  const [paymentStatus, setPaymentStatus] = useState(booking?.paymentStatus);
  const [loading, setLoading] = useState(false);


  const [vehicles, setVehicles] = useState(brands?.find(b => b._id === brand)?.vehicles?.map(({ model, _id }) => ({
    label: model,
    value: _id
  })))
  const [locations, setLocations] = useState(services?.find(b => b._id === service)?.locations?.map(({ name, _id }) => ({
    label: name,
    value: _id
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
    setVehicles(brands?.find(b => b._id === (brand ?? booking?.vehicle?.brand))?.vehicles?.map(({ model, _id }) => ({
      label: model,
      value: _id
    })))
  }, [brand])

  useEffect(() => {
    setFullName(booking?.fullName ?? '')
    setEmail(booking?.email ?? booking?.user?.email ?? '')
    setPhoneNumber(booking?.phoneNumber ?? booking?.user?.phoneNumber ?? '')
    setStatus(booking?.status ?? '')
    setLocation(booking?.location ?? '')
    setAmount(booking?.amount ?? '')
    setService(booking?.service?._id ?? '')
    setCarType(booking?.carType ?? '')
    setBrand(booking?.vehicle?.brand ?? '')
    setVehicle(booking?.vehicle?._id ?? '')
    setPaymentMethod(booking?.paymentMethod ?? '')
    setPaymentStatus(booking?.paymentStatus ?? '')
    setLoading(false);
    setVehicles(brands?.find(b => b._id === (brand ?? booking?.vehicle?.brand))?.models?.map(({ model, _id }) => ({
      label: model,
      value: _id
    })))
    setLocations(services?.find(b => b._id === (service ?? booking?.service?._id))?.locations?.map(({ name, _id }) => ({
      label: name,
      value: _id
    })))
  }, [booking]);

  useEffect(() => {
    const selectedService = services?.find(s => s._id === service)

    if (selectedService) {
      console.log({ selectedService, vehicle })
      const defaultPrice = selectedService.vehicles?.find(v =>
        v.vehicle === vehicle
      )?.price ?? selectedService.vehicles?.find(v => v.isDefault)

      if (defaultPrice) {
        setAmount(defaultPrice.toString())
      }
    }
  }, [service, vehicle, services, brands, brand])

  useEffect(() => {
    const b = brands?.find(a => a._id === brand)
    const v = vehicles?.find(c => c._id === vehicle)
    let name = `${b?.name ?? ''} ${v?.model ?? ''} ${v?.year ?? ''}`;
    name = name.replace('undefined', '').trim()

    setCarType(name)
  }, [brand, vehicle])

  useEffect(() => {
    setLocations(services?.find(s => s._id === service)?.locations?.map(({ name, _id }) => ({
      label: name,
      value: _id
    })))
  }, [service])


  useEffect(() => {
    getServices()
    setFullName(booking?.fullName ?? '')
    setEmail(booking?.email ?? booking?.user?.email ?? '')
    setPhoneNumber(booking?.phoneNumber ?? booking?.user?.phoneNumber ?? '')
    setStatus(booking?.status ?? '')
    setLocation(booking?.location?._id ?? '')
    setAmount(booking?.amount ?? '')
    setService(booking?.service?._id ?? '')
    setCarType(booking?.carType ?? '')
    setBrand(booking?.vehicle?.brand ?? '')
    setVehicle(booking?.vehicle?._id ?? '')
    setPaymentMethod(booking?.paymentMethod ?? '')
    setPaymentStatus(booking?.paymentStatus ?? '')
    setLoading(false);
    setVehicles(brands?.find(b => b._id === (brand ?? booking?.vehicle?.brand))?.models?.map(({ model, _id }) => ({
      label: model,
      value: _id
    })))
    setLocations(services?.find(b => b._id === (service ?? booking?.service?._id))?.locations?.map(({ name, _id }) => ({
      label: name,
      value: _id
    })))
  }, [booking])


  const onsubmit = (form) => {
    form.preventDefault();

    if (
      !fullName?.length ||
      !location?.length ||
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
        { name: "location", label: "Location", value: location },
        { name: "email", label: "Email", value: email },
        { name: "status", label: "Status", value: status },
        { name: "brand", label: "Brand", value: brand },
        { name: "vehicle", label: "Vehicle", value: vehicle },
        { name: "service", label: "Service", value: service },
        { name: "carType", label: "Car Type", value: carType },
        { name: "paymentMethod", label: "Payment Method", value: paymentMethod },
        { name: "paymentStatus", label: "Payment Status", value: paymentStatus }
      ]
    );
  };

  return (
    <>

      <form className="grid gap-5 !p-0 w-full" onSubmit={onsubmit}>
        <Input
          label={"Full Name"}
          name={"fullName"}
          value={fullName}
          setValue={setFullName}
          error={""}
        />
        <div className="flex flex-wrap md:flex-nowrap gap-x-2 gap-y-5">
          <Input
            label={"Email"}
            name={"email"}
            value={email}
            setValue={setEmail}
            error={""}
            type='email'
          />
          <Input
            label={"Phone Number"}
            name={"phoneNumber"}
            value={phoneNumber}
            setValue={setPhoneNumber}
            error={""}
            type='tel'
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
          />
        </div>

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
          />
          <Select
            label={"Vehicle"}
            name={"vehicle"}
            value={vehicle}
            setValue={setVehicle}
            error={""}
            options={vehicles}
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
        />
        <Select
          label={"Location"}
          name={"location"}
          value={location}
          setValue={setLocation}
          error={""}
          options={locations}
        />

        <div className="flex flex-wrap md:flex-nowrap gap-x-3 gap-y-5">
          {/* <Select
            label={"Status"}
            name={"status"}
            value={status}
            setValue={setStatus}
            error={""}
            options={
              [
                "cancelled",
                // "pending-cancelled",
                "pending",
                "confirmed",
                "in-progress",
                "completed",
                // "paid",
                // "pending-payment",
              ].map(stat => (
                {
                  label: stat.replace('-', ' ').toUpperCase(),
                  value: stat,
                }))
            }
            disabled={status === 'in-progress'}
          /> */}
          {/* <Select
            label={"Payment Status"}
            name={"paymentStatus"}
            value={paymentStatus}
            setValue={setPaymentStatus}
            error={""}
            options={["pending", "completed", "failed", "refunded"]}
          /> */}
          <Select
            label={"Payment Method"}
            name={"paymentMethod"}
            value={paymentMethod}
            setValue={setPaymentMethod}
            error={""}
            options={["cash", "online", "transfer"]}
          />
        </div>

        <div className="my-5 w-full gap-5 !px-0 text-center">
          <button type="submit" disabled={loading} className="mx-auto rounded hover:scale-105 transition-all duration-200 hover:bg-opacity-75 bg-brand-red p-2 px-4 text-white w-full max-w-[15rem]">
            Book Now
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
