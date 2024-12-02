import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import { useAuth } from "../../../provders/AuthProvider";
import apiClient from "../../../utils/apiClient";
import { toast } from "react-toastify";
import Loader from "../../../component/Loader";

const EditProfile = () => {
  const { updateUser, getUserData } = useAuth();
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (form) => {
    form.preventDefault();
    setLoading(true);

    try {
      const { message, user } = await apiClient.put("user/me", {
        json: {
          email,
          fullName,
          phoneNumber,
        }
      }).json()
      updateUser(user);
      return toast.success(message);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      toast.error(error.response.json().message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData().then(data => {
      setEmail(data?.email);
      setFullName(data?.fullName);
      setPhoneNumber(data?.phoneNumber);
    })
  }, [])

  return (
    <>
      {loading && <Loader />}

      <h2 className="!bg-brand-red p-3 md:p-5 text-center font-semibold text-white">
        Edit Profile
      </h2>

      <form className="grid gap-5 !p-0" onSubmit={submit}>
        <div className="mt-5 grid gap-5 p-5 md:gap-8 md:px-10">
          <Input
            label={"First name"}
            name={"fullName"}
            value={fullName}
            setValue={setFullName}
            error={""}
          />
          <Input
            label={"Email"}
            name={"email"}
            value={email}
            type="email"
            setValue={setEmail}
            error={""}
          />
          <Input
            label={"Phone Number"}
            name={"phoneNumber"}
            value={phoneNumber}
            type="tel"
            setValue={setPhoneNumber}
            error={""}
          />

          <div className="my-5 w-full gap-5 !px-0 text-center">
            <button type="submit" className="mx-auto rounded hover:scale-105 transition-all duration-200 hover:bg-opacity-75 bg-brand-red p-2 px-4 text-white">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
