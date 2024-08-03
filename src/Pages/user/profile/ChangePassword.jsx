import { useState } from "react";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import OtpInput from "../../../components/OtpInput";
import { toast } from "react-toastify";
import apiClient from "../../../utils/apiClient";
import { useAuth } from "../../../provders/AuthProvider";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { getUserData, useUser } = useAuth()
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [otp, setOtp] = useState();
  const [step, setStep] = useState();

  const requestOtp = async (form) => {
    form.preventDefault();
    try {
      const response = await apiClient.post('/otp/get', {
        reason: 'Password Change',
        email: useUser()?.email
      })

      const { message } = await response.json()

      if (response.ok) {
        toast.success(message)
        return setStep("otp");
      }
      toast.error(message)
    } catch (error) {
      console.error(error)
      toast.error(error)
    }
  };

  const submit = async (form) => {
    form.preventDefault();
    try {
      const response = await apiClient.post('/user/change-password', {
        oldPassword,
        newPassword,
        confirmPassword,
        otp,
      })

      const { message } = await response.json()

      if (response.ok) {
        toast.success(message)
        getUserData()
        return navigate("/user/profile");
      }

      toast.error(message)
    } catch (error) {
      console.error(error)
      toast.error(error)
    }
  };
  return (
    <>
      <h2 className="!bg-brand-red p-3 md:p-5 text-center font-semibold text-white">
        Change Password
      </h2>

      <form className="mt-5 grid gap-5 p-5 md:gap-8 md:px-10" onSubmit={step !== 'otp' ? requestOtp : submit}>
        <Input
          label="Old password"
          value={oldPassword}
          setValue={setOldPassword}
          type="password"
          required
        />
        <Input
          label="New password"
          value={newPassword}
          setValue={setNewPassword}
          type="password"
          required
        />
        <Input
          label="Confirm password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          type="password"
          required
        />
        {
          step === 'otp' &&
          <>
            <div className="mb-5 text-center md:mb-10">
              <p>Please input the code sent to your mail address </p>
              <span> {useAuth().user?.email} </span>
            </div>
            <OtpInput length={6} setValue={setOtp} />
          </>
        }


        <div className="my-5 w-full gap-5 !px-0 text-center">
          <button
            type={'submit'}
            className="mx-auto rounded bg-brand-red  hover:scale-105 transition-all duration-200 hover:bg-opacity-75 p-2 px-4 text-white"
          >
            {step === 'otp' ? 'Save Changes' : 'Continue'}
          </button>
        </div>
      </form>


    </>
  );
};

export default ChangePassword;
