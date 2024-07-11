import TitleHeader from "../../components/TitleHeader";
import ProfileListItem from "../../components/ProfileListItem";
import { FaAward } from "react-icons/fa6";

const list = [
  {
    label: "Terms & Conditions",
    icon: <FaAward />,
    to: "/profile/terms-condition",
    danger: true,
  },
  {
    label: "Privacy policy",
    icon: <FaAward />,
    to: "/profile/privacy-policy",
    danger: true,
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="!p-0">
        <div className="profile-header *:p-3 *:md:p-5">
          <div className="wrapper !bg-brand-red md:!bg-transparent">
            <TitleHeader title={"About Us"} />
          </div>
        </div>
      </div>

      <p className="text-center md:!px-12">
        Welcome to JOOMBOW, where your car's care and your satisfaction are at
        the heart of our mission. Established in Ibadan, JOOMBOW Car Wash &
        Detailing Services brings a fresh perspective to the world of automotive
        care. We understand that your vehicle is not just a mode of transport;
        it's an extension of your identity. That's why we've dedicated ourselves
        to providing a premium and comprehensive car care experience
      </p>

      <ul className="!mt-10 grid gap-2 md:!px-12">
        {list.map(({ label, icon, danger, to }) => (
          <li key={label} className={`${danger ? "text-brand-red" : ""}`}>
            <ProfileListItem label={label} icon={icon} to={to} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutUs;
