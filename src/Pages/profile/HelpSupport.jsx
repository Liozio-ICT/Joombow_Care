import TitleHeader from "../../components/TitleHeader";
import ProfileListItem from "../../components/ProfileListItem";
import { FaInstagram, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";
import { ScrollRestoration } from "react-router-dom";

const list = [
  {
    label: "Reach out on X(Twitter)",
    to: "x.com",
    icon: <FaXTwitter />,
  },
  {
    label: "Reach out on Instagram",
    to: "instagram.com",
    icon: <FaInstagram />,
  },
  {
    label: "Reach out on E-mail",
    to: "mailto:",
    icon: <FaRegEnvelope />,
  },
];

const HelpSupport = () => {
  return (
    <>
      <ScrollRestoration />

      <div className="!p-0">
        <div className="profile-header *:p-3 *:md:p-5">
          <div className="wrapper !bg-brand-red md:!bg-transparent">
            <TitleHeader title={"Help and Support"} />
          </div>
        </div>
      </div>
      <ul className="mt-5 grid gap-5">
        {list.map(({ label, icon, danger, to }) => (
          <li key={label} className={`${danger ? "text-brand-red" : ""}`}>
            <ProfileListItem label={label} icon={icon} to={to} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HelpSupport;
