import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/tailwind";

const Tab = ({ href, label, id, active, setActive, activeClass = "" }) => {
  const computedClass = active.label === label || active.href === href || active.id === id ? activeClass : "";
  return (
    <button
      className={cn(["relative rounded p-1 px-2", computedClass])}
      onClick={() => setActive({ href, label, id, })}
    >
      {label}
      {href && <Link to={href} className="absolute inset-0" />}
    </button>
  );
};

export default Tab;
