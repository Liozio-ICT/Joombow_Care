import TitleHeader from "../../components/TitleHeader";
import ListToggleItem from "../../components/ListToggleItem";
import ProfileListItem from "../../components/ProfileListItem";
import { BiLockAlt } from "react-icons/bi";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [systemDefault, setSystemDefault] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [email, setEmail] = useState(false);
  return (
    <>
      <div className="!p-0">
        <div className="profile-header *:p-3 *:md:p-5">
          <div className="wrapper !bg-brand-red md:!bg-transparent">
            <TitleHeader title={"Settings"} />
          </div>
        </div>
      </div>
      <ul className="mt-5 grid gap-5">
        <li>
          <ProfileListItem
            label={"Change password"}
            icon={<BiLockAlt />}
            to={"/dashboard/profile/settings/change-password"}
          />
        </li>
        <li>
          <ListToggleItem
            label={"Light Mode"}
            toggle={darkMode}
            setToggle={setDarkMode}
          />
        </li>
        <li>
          <ListToggleItem
            label={"System Default"}
            toggle={systemDefault}
            setToggle={setSystemDefault}
          />
        </li>
      </ul>

      <p>Connected Accounts</p>
      <ul className="grid gap-5 border-white *:border-b">
        <li>
          <ListToggleItem
            icon={<FaXTwitter size={24} />}
            toggle={twitter}
            setToggle={setTwitter}
          />
        </li>
        <li>
          <ListToggleItem
            icon={<FaEnvelope size={24} />}
            toggle={email}
            setToggle={setEmail}
          />
        </li>
        <li>
          <ListToggleItem
            icon={<FaInstagram size={24} />}
            toggle={instagram}
            setToggle={setInstagram}
          />
        </li>
        <li>
          <ListToggleItem
            icon={<FaFacebookF size={24} />}
            toggle={facebook}
            setToggle={setFacebook}
          />
        </li>
      </ul>
    </>
  );
};

export default Settings;
