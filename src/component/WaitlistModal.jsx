import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import apiClient from "../utils/apiClient";

const ShowWaitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", contact: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIsVisible(true);
    // }, 200);
    // return () => clearTimeout(timer);
    const hasJoinedWaitlist = localStorage.getItem("hasJoinedWaitlist");

    if (!hasJoinedWaitlist) {
      setTimeout(() => setIsVisible(true), 200);
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toast.error(Object.values(validationErrors).join(", "));
        return;
      }

      const response = await apiClient.post(`waitlist/create`, {
        json: {
          name: formData.fullName,
          phoneNumber: formData.contact,
        },
      });

      const { message } = await response.json();

      toast.success(message);
      setErrors({});
      localStorage.setItem("hasJoinedWaitlist", "true");
      closeModal();
    } catch (error) {
      console.error(error);
      let errorMessage = "Error joining waitlist. Please try again later.";
      // Check if the error response has a JSON body
      if (error.response) {
        try {
          const errorData = await error.response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          console.error(
            "Error joining waitlist. Please try again later.",
            jsonError,
          );
        }
      }
      // const errorData = await error.response.json();
      // const errorMessage =
      //   errorData || "Error joining waitlist. Please try again later.";
      setMessage(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <ToastContainer /> */}

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
                    Join Waitlist Now!
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
                        className="rounded-md border bg-gray-50 p-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:duration-200"
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
                      Join Now
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
