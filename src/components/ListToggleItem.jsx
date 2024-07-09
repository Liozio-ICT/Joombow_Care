import React from "react";
import "./listtoggle.css";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const ListToggleItem = ({
  icon,
  label,
  toggle,
  setToggle,
  with_icon = true,
}) => {
  return (
    <button
      className={`list-toggle-item relative isolate ${with_icon ? "show-icon" : ""}`}
      onClick={() => setToggle(!toggle)}
    >
      <span className="icon">{icon}</span>

      <span className="label">{label} </span>

      <span className="toggle">
        {toggle ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
      </span>
    </button>
  );
};

export default ListToggleItem;
