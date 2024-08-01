import TitleHeader from "../../components/TitleHeader";
import ProfileListItem from "../../components/ProfileListItem";
import { FaAward } from "react-icons/fa6";
import { ScrollRestoration } from "react-router-dom";

const list = [
  {
    label: "Terms & Conditions",
    icon: <FaAward />,
    danger: true,
  },
  {
    label: "Privacy policy",
    icon: <FaAward />,
    danger: true,
  },
];

const AboutUs = () => {
  return (
    <>
      <ScrollRestoration />

      <div className="rounded-lg shadow overflow-clip max-w-screen-sm mx-auto *:p-3 *:md:p-5">
        <h2 className="!bg-brand-red  text-center font-semibold text-white">
          About Us
        </h2>
        <p className="text-center md:!px-12 leading-relaxed">
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
      </div>
    </>
  );
};

export default AboutUs;
