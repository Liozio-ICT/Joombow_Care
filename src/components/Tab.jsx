import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/tailwind";

const Tab = ({ href, label,id, active, setActive, activeClass = "" }) => {
  const computedClass = active===id ? activeClass : "";

  return (
    <button
      className={cn(["relative rounded p-1 px-2",  computedClass ])}
      onClick={setActive(id)}
    >
      {label}
      <Link to={href} className="absolute" />
    </button>
  );
};

export default Tab;
