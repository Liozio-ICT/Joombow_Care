import TitleHeader from "../../../components/TitleHeader";
import { useState } from "react";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import OtpInput from "../../../components/OtpInput";
import { ScrollRestoration } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../../../utils/apiClient";
import { useAuth } from "../../../provders/AuthProvider";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { getUserData } = useAuth()
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
        email: useAuth().user?.email
      })
      if (response.ok)
        return setStep("otp");

      const { message } = await response.json()
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

      if (response.ok)
        getUserData()
      return navigate("/user/profile");

      const { message } = await response.json()
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

      <form className="mt-5 grid gap-5 p-5 md:gap-8 md:px-10" onSubmit={submit}>
        <Input
          label="Old password"
          value={oldPassword}
          setValue={setOldPassword}
          type="password"
        />
        <Input
          label="New password"
          value={newPassword}
          setValue={setNewPassword}
          type="password"
        />
        <Input
          label="Confirm password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          type="password"
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
            type={step === 'opt' ? 'submit' : 'button'}
            onClick={step !== 'otp' ? requestOtp : submit}
            className="mx-auto rounded bg-brand-red p-2 px-4 text-white"
          >
            {step === 'otp' ? 'Save Changes' : 'Continue'}
          </button>
        </div>
      </form>


    </>
  );
};

export default ChangePassword;
