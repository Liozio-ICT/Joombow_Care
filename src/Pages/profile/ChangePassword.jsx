import TitleHeader from "../../components/TitleHeader";
import { useState } from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import OtpInput from "../../components/OtpInput";
import { ScrollRestoration } from "react-router-dom";
import { toast } from "react-toastify";
import apiClient from "../../utils/apiClient";
import { useAuth } from "../../provders/AuthProvider";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { user } = useAuth()
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
        email: user.email
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

    console.log({ otp })
    try {
      const response = await apiClient.post('/user/change-password', {
        oldPassword,
        newPassword,
        confirmPassword,
        otp,
      })

      if (response.ok)
        return navigate("/dashboard/profile");

      const { message } = await response.json()
      toast.error(message)
    } catch (error) {
      console.error(error)
      toast.error(error)
    }

  };
  return (
    <>
      <ScrollRestoration />

      <div className="!p-0">
        <div className="profile-header *:p-3 *:md:p-5">
          <div className="wrapper !bg-brand-red md:!bg-transparent">
            <TitleHeader
              goBack={() => (step === "otp" ? setStep() : navigate(-1))}
              title={step === "otp" ? "ENTER OTP" : "Change Password"}
            />
          </div>
        </div>
      </div>
      <div className="md:!px-10">
        {step !== "otp" ? (
          <form className="mt-5 grid gap-5" onSubmit={requestOtp}>
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
            <div className="my-5 grid w-full gap-5 !px-0 text-center *:w-full">
              <button
                type="submit"
                className="mx-auto rounded bg-brand-red p-2"
              >
                Save changes
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-5 grid gap-5" onSubmit={submit}>
            <div className="mb-5 text-center md:mb-10">
              <p>Please input the code sent to your mail address </p>
              <span> {user.email} </span>
            </div>
            <OtpInput length={6} setValue={setOtp} />
            <div className="my-5 grid w-full gap-5 !px-0 text-center *:w-full">
              <button
                type="submit"
                className="mx-auto rounded bg-brand-red p-2"
              >
                Continue
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default ChangePassword;
