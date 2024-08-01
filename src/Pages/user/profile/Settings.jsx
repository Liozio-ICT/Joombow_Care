import TitleHeader from "../../../components/TitleHeader";
import ListToggleItem from "../../../components/ListToggleItem";
import ProfileListItem from "../../../components/ProfileListItem";
import { BiLockAlt } from "react-icons/bi";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [systemDefault, setSystemDefault] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [email, setEmail] = useState(false);
  return (
    <>
      <ScrollRestoration />

      <div className="mx-auto grid max-w-screen-sm overflow-clip rounded-lg shadow *:p-3 *:md:p-5">
        <div className="bg-brand-red text-white">
          <TitleHeader title={"Settings"} />
        </div>

        <ul className="mt-5 grid gap-5">
          {/* <li>
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
          </li> */}
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
      </div>
    </>
  );
};

export default Settings;
