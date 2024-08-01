import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ icon, label, to, onClick }) => {
  return (
    <div className="relative isolate grid w-full items-center gap-2 grid-cols-[auto_1fr] h-fit" onClick={onClick}>
      <span className="flex *:aspect-square items-center justify-center object-contain p-1 ">{icon}</span>

      <span className="text-left text-base md:text-lg">{label} </span>

      {to && <Link to={to} className="absolute inset-0" />}
    </div>
  );
};

export default ListItem;
