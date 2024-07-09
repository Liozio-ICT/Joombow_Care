import React from "react";
import { Link } from "react-router-dom";
import "./profilelist.css";
import { FaCaretRight } from "react-icons/fa";

const ProfileListItem = ({ icon, label, to, onClick }) => {
  return (
    <button className="profile-list-item relative isolate" onClick={onClick}>
      <span className="icon">{icon}</span>

      <span className="label">{label} </span>

      <span className="arrow">
        <FaCaretRight />
      </span>
      {to && <Link to={to} className="absolute inset-0" />}
    </button>
  );
};

export default ProfileListItem;
