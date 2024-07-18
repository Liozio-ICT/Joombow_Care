import React from "react";
import { Link } from "react-router-dom";
import "./listitem.css";

const ListItem = ({ icon, label, to, onClick }) => {
  return (
    <div className="list-item relative isolate" onClick={onClick}>
      <span className="icon">{icon}</span>

      <span className="label">{label} </span>

      {to && <Link to={to} className="absolute inset-0" />}
    </div>
  );
};

export default ListItem;
