import { useRef, useState } from "react";

const OtpInput = ({ error, length = 6, setValue }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const boxRef = useRef([]);

  const handleChange = (index, value) => {
    let newArr = [...otp];
    value = value.toString();
    newArr[index] = value.length > 1 ? value[value.length] : value;
    setOtp(newArr);
    if (value && index < length - 1) {
      boxRef.current[index + 1]?.focus();
    }
    setValue(newArr.join(""));
  };
  const handleBackSpace = (e, index) => {
    if (e?.key === "Backspace" && !e?.target?.value && index > 0) {
      boxRef.current[index - 1]?.focus();
    }
    if (e?.key === "Enter" && e?.target?.value && index < length) {
      boxRef.current[index + 1]?.focus();
    }
  };
  return (
    <div className="grid w-full gap-2">
      <div className="flex gap-2">
        {otp.map((value, index) => (
          <input
            value={value}
            key={index}
            name={index}
            ref={(el) => (boxRef.current[index] = el)}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleBackSpace(e, index)}
            className="flex aspect-square min-h-12 w-1 grow items-center justify-center rounded-md border border-current bg-white p-2 px-3 text-center text-black outline-none"
          />
        ))}
      </div>

      <span className="m-0 h-fit p-0 leading-none">
        {error && <span>{error}</span>}
      </span>
    </div>
  );
};

export default OtpInput;
