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
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (form) => {
    form.preventDefault();
    setLoading(true);

    try {
      const response = await apiClient.put("/user/me/edit", {
        email,
        firstName,
        lastName,
      });
      const data = await response.json();
      if (response.ok) {
        console.log({ data })
        return toast.success(data.message);
      }
      toast.error(data.message);
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error(error);
    } finally {
      getUserData()
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData().then(data => {
      setEmail(data?.email);
      setFirstName(data?.firstName);
      setLastName(data?.lastName);
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
            name={"firstName"}
            value={firstName}
            setValue={setFirstName}
            error={""}
          />
          <Input
            label={"Last name"}
            name={"lastName"}
            value={lastName}
            setValue={setLastName}
            error={""}
          />
          <Input
            label={"Email"}
            name={"email"}
            value={email}
            setValue={setEmail}
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
