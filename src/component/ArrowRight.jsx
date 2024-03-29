import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function ArrowRight() {
  return (
    <div className="ArrowRight bg-black w-[20px] h-[20px] rounded-full cursor-pointer p-[4px]">
      <Link>
        {" "}
        <FaArrowLeft className="text-white text-[12px]" />
      </Link>
    </div>
  );
}

export default ArrowRight;