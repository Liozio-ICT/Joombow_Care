import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowWaitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", contact: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Phone Number or Email Address is required.";
    }
    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Redirect to the Google Form link
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdiwgEAMgKuKcZstJumlTj8I-26Fw8mwGtR-LEblR6i7AcKNA/viewform";
      setErrors({});
      closeModal();
    }
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     toast.success("🎉 Thank you for registering!", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     setErrors({});
  //     closeModal();
  //   }
  // };

  return (
    <>
      <ToastContainer />

      {isVisible && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-70"
            onClick={closeModal}
          ></div>

          {/* Modal */}
          <main className="fixed inset-0 z-50 flex scale-100 items-center justify-center opacity-100 transition-all duration-300">
            <div className="relative w-[90%] max-w-6xl rounded-md bg-white shadow-lg">
              <FaTimes
                size={24}
                className="absolute right-4 top-4 cursor-pointer text-red-500 duration-300 hover:text-red-400"
                onClick={closeModal}
              />

              {/* Combined Container */}
              <div className="flex flex-col items-center p-4 lg:flex-row">
                {/* Image Section */}
                <div className="hidden h-[400px] w-full lg:block lg:h-auto lg:w-1/2">
                  <img
                    src="https://res.cloudinary.com/dnldaz7oh/image/upload/v1716320436/electrical_h34xr1.jpg"
                    alt="Mechanic"
                    className="h-full w-full rounded-md object-cover lg:rounded-none lg:rounded-l-md"
                  />
                </div>

                {/* Form Section */}
                <div className="w-full px-2 py-8 lg:w-1/2 lg:px-6">
                  <h1 className="text-20px text-center font-bold text-gray-800 lg:text-[25px]">
                    We are opening soon! Join our waitlist
                  </h1>

                  <p className="py-4 text-center font-clash text-[18px] font-normal text-gray-600">
                    Register Now!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor="fullName"
                        className="mb-2 text-sm font-bold text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Enter your name here"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="rounded-md border bg-gray-50 p-2 px-3 focus:duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      {errors.fullName && (
                        <span className="mt-1 text-sm text-red-500">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="contact"
                        className="mb-2 text-sm font-bold text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="contact"
                        placeholder="Enter your Phone number here"
                        value={formData.contact}
                        onChange={handleInputChange}
                        className="rounded-md border bg-gray-50 p-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:duration-200"
                      />
                      {errors.contact && (
                        <span className="mt-1 text-sm text-red-500">
                          {errors.contact}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-md bg-red-500 py-2 text-white transition duration-300 hover:bg-red-400"
                    >
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default ShowWaitlist;
