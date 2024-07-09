import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../../layouts/constants";
import TitleHeader from "../../components/TitleHeader";
import Input from "../../components/Input";
import { FaCamera } from "react-icons/fa6";

const EditProfile = () => {
  const [photo, setPhoto] = useState();
  const [email, setEmail] = useState(user.email);
  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);

  const navigate = useNavigate();

  const handlePhotoUpload = (input) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(input);
      fileReader.onload = () => setPhoto(fileReader.result);
    } catch (error) {
      console.log({ error });
    }
  };

  const submit = (form) => {
    form.preventDefault();

    const data = {
      photo,
      email,
      first_name,
      last_name,
    };

    navigate("/profile");
  };
  return (
    <>
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
            placeholder={user.first_name ?? ""}
            name={"first_name"}
            value={first_name}
            setValue={setFirstName}
            error={""}
          />
          <Input
            label={"Last name"}
            placeholder={user.last_name ?? ""}
            name={"last_name"}
            value={last_name}
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
