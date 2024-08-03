import ProfileListItem from "../../components/ProfileListItem";
import { FaFacebook, FaInstagram, FaRegEnvelope, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { ScrollRestoration } from "react-router-dom";

const list = [
  {
    label: "Reach out on X(Twitter)",
    to: "https://x.com/Liozio_Joombow/status/1817858442683396459?t=dvdV-ldWHW0HRavST3wKyw&s=19",
    icon: <FaXTwitter />,
  },
  {
    label: "Reach out on Instagram",
    to: "https://x.com/Liozio_Joombow/status/1817858442683396459?t=dvdV-ldWHW0HRavST3wKyw&s=19",
    icon: <FaInstagram />,
  },
  {
    label: "Reach out on Facebook",
    to: "https://www.facebook.com/share/pNNwjpkqrtggdzvW/?mibextid=qi2Omg",
    icon: <FaFacebook />,
  },
  {
    label: "Reach out on WhatsApp",
    to: "https://wa.me/2348122969820",
    icon: <FaWhatsapp />,
  },
  {
    label: "Reach out on E-mail",
    to: "mailto:fatimat@liozio.com",
    icon: <FaRegEnvelope />,
  },
];

const HelpSupport = () => {
  return (
    <>
      <ScrollRestoration />

      <div className="rounded-lg shadow overflow-clip max-w-screen-sm mx-auto *:p-3 *:md:p-5">
        <h2 className="!bg-brand-red  text-center font-semibold text-white">
          Help and Support
        </h2>
        <ul className="mt-5 grid gap-5">
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

export default HelpSupport;
