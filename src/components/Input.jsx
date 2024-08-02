import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { cn } from "../utils/tailwind";

const Input = ({
  label,
  error = '',
  type = "text",
  name,
  placeholder = "",
  value,
  setValue,
  className = '',
  ...rest
}) => {
  const [typeValue, setTypeValue] = useState(type);
  return (
    <div className="grid w-full gap-2">
      <label>{label}</label>
      <div className={cn(["input flex w-full overflow-clip rounded-md border border-current bg-transparent md:bg-opacity-50", className])}>
        <input
          name={name}
          placeholder={placeholder}
          type={typeValue}
          value={value}
          {...rest}
          onChange={(e) => setValue(e.target.value)}
          className={cn(["grow border-none bg-transparent p-2 px-3 outline-none"])}
        />

        {/* <!-- show toggle visibility button for password only  --> */}
        {
          type === 'password' &&
          <button type='button' onClick={() => setTypeValue(typeValue === 'password' ? 'text' : 'password')} className="cursor-pointer text-sm p-2 pl-0 h-full block">
            {typeValue === 'password' ? <BsEye /> : <BsEyeSlash />}
          </button>
        }
      </div>

      <span className="m-0 h-fit p-0 leading-none">
        {error && <span>{error}</span>}
      </span>
    </div>
  );
};

export default Input;
