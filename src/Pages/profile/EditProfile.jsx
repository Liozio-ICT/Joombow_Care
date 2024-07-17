import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleHeader from "../../components/TitleHeader";
import Input from "../../components/Input";
import { FaCamera } from "react-icons/fa6";
import { ScrollRestoration } from "react-router-dom";
import { useAuth } from "../../provders/AuthProvider";
import apiClient from "../../utils/apiClient";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";

const EditProfile = () => {
  const { user, getUserData, updateUser } = useAuth()
  const [photo, setPhoto] = useState(user.photo ??
    `https://ui-avatars.com/api/?name=${user?.firstName?.replaceAll(' ', '+') ?? 'Joombow'}+${user?.lastName?.replaceAll(' ', '+') ?? 'User'}`);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handlePhotoUpload = (input) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(input);
      fileReader.onload = () => setPhoto(fileReader.result);
      const response = await apiClent.post("/upload/file",{
        file: input
      }, {
        content_type: "multipart/formdata"
      })
      const {message,error, url}=await response.json()
      if(response.ok){
        setPhoto(url)
       return toast.success(message)
      }
      toast.error(message)
      setPhoto(`https://ui-avatars.com/api/?name=${e?.firstName?.replaceAll(' ', '+') ?? 'Joombow'}+${e?.lastName?.replaceAll(' ', '+') ?? 'User'}`)

    } catch (error) {
      console.log({ error });
      setPhoto(`https://ui-avatars.com/api/?name=${e?.firstName?.replaceAll(' ', '+') ?? 'Joombow'}+${e?.lastName?.replaceAll(' ', '+') ?? 'User'}`)
      toast.error(error?.message)
    }
  };

  const submit = async (form) => {
    form.preventDefault();
    setLoading(true)

    try {
      const response = await apiClient.put('/user/me/edit', {
        photo,
        email,
        firstName,
        lastName,
      })

      const data = await response.json()
      setLoading(false)
      if (response.ok) {
        updateUser(data.user)
        toast.success(data.message)

        setTimeout(() => {
          navigate("/dashboard/profile");
        }, 1000);
      }
      toast.success(data.message)
    }
    catch (error) {
      setLoading(false)
      console.error(error)
      toast.error(error)
    }
  };

  useEffect(() => {
    getUserData().then((e) => {
      setPhoto(e.photo ?? `https://ui-avatars.com/api/?name=${e?.firstName?.replaceAll(' ', '+') ?? 'Joombow'}+${e?.lastName?.replaceAll(' ', '+') ?? 'User'}`)
    })
  }, [])
  return (
    <>
      <ScrollRestoration />

      {loading && <Loader />}

      <form className="grid gap-5 !p-0" onSubmit={submit}>
        <div className="profile-header *:p-3 *:md:p-5">
          <div className="wrapper !bg-brand-red">
            <TitleHeader title={"Edit Profile"} rounded />
          </div>
          <div className="photo relative isolate aspect-square w-24 rounded-full border-2 border-white bg-dark-2">
            <div className="absolute inset-0 -z-10 overflow-clip rounded-full">
              {photo && (
                <img
                  src={photo}
                  alt={user.name}
                  className="size-full object-cover"
                />
              )}
            </div>
            <input
              type="file"
              name="photo"
              id={`${user.email}_photo`}
              hidden
              onChange={(e) => handlePhotoUpload(e.target.files[0])}
            />
            <label
              htmlFor={`${user.email}_photo`}
              className="absolute bottom-0 flex size-8 translate-y-[50%] cursor-pointer items-center justify-center rounded-full bg-black p-1.5"
            >
              <FaCamera className="size-full object-contain" />
            </label>
          </div>

          <div className="info !py-0"></div>
        </div>

        <div className="mt-5 grid gap-5 p-5 md:gap-8 md:px-10">
          <Input
            label={"First name"}
            placeholder={user.firstName ?? ""}
            name={"firstName"}
            value={firstName}
            setValue={setFirstName}
            error={""}
          />
          <Input
            label={"Last name"}
            placeholder={user.lastName ?? ""}
            name={"lastName"}
            value={lastName}
            setValue={setLastName}
            error={""}
          />
          <Input
            label={"Email"}
            placeholder={user.email ?? ""}
            name={"email"}
            value={email}
            setValue={setEmail}
            error={""}
          />

          <div className="my-5 grid w-full gap-5 !px-0 text-center *:w-full">
            <button type="submit" className="mx-auto rounded bg-brand-red p-2">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
