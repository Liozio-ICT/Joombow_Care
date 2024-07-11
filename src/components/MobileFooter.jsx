import { Link } from "react-router-dom";
import "./mobilefooter.css";
import { FaHome } from "react-icons/fa";
import { FaBox, FaUser, FaWallet } from "react-icons/fa6";

const MobileFooter = ({ dark = false }) => {
  return (
    <footer className={`mobile-footer ${dark ? "dark" : ""}`}>
      <Link to="/dashboard/" className="tab">
        <FaHome size={16} />
        <span>Home</span>
      </Link>
      <Link to="/dashboard/bookings" className="tab">
        <FaBox size={16} />
        <span>Bookings</span>
      </Link>
      <Link to="/dashboard/services" className="tab">
        <FaWallet size={16} />
        <span>Services</span>
      </Link>
      <Link to="/dashboard/profile" className="tab">
        <FaUser size={16} />
        <span>Profile</span>
      </Link>
    </footer>
  );
};

export default MobileFooter;
