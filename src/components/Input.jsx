import { useState } from "react";

const Input = ({
  label,
  error,
  type = "text",
  name,
  placeholder = "",
  value,
  setValue,
}) => {
  let type_value = type;
  return (
    <div className="grid w-full gap-2">
      <label>{label}</label>
      <div className="input flex w-full overflow-clip rounded-md border border-current bg-transparent md:bg-opacity-50">
        <input
          name={name}
          placeholder={placeholder}
          type={type_value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="grow border-none bg-transparent p-2 px-3 outline-none"
        />

        {/* <!-- show toggle visibility button for password only  --> */}
      </div>

      <span className="m-0 h-fit p-0 leading-none">
        {error && <span>{error}</span>}
      </span>
    </div>
  );
};

export default Input;
