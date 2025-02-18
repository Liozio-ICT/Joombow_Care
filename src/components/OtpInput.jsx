import { useRef, useState } from "react";

const OtpInput = ({ error, length = 4, setValue }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));  // Initialize with empty values
  const boxRef = useRef([]);

  const handleChange = (index, value) => {
    let newArr = [...otp];
    value = value.toString();
    // Limit input to a single character
    newArr[index] = value.length > 1 ? value.charAt(0) : value;
    setOtp(newArr);  // Update local state
    if (value && index < length - 1) {
      boxRef.current[index + 1]?.focus();  // Move focus to next input
    }
    setValue(newArr.join(""));  // Update parent state
  };

  const handleBackSpace = (e, index) => {
    if (e?.key === "Backspace" && !e?.target?.value && index > 0) {
      boxRef.current[index - 1]?.focus();  // Move focus to previous input
    }
    if (e?.key === "Enter" && e?.target?.value && index < length) {
      boxRef.current[index + 1]?.focus();  // Move focus to next input
    }
  };

  return (
    <div className="grid w-full gap-2">
      <div className="flex justify-center gap-2">
        {otp.map((value, index) => (
          <input
            key={index}
            value={value}
            name={index}
            ref={(el) => (boxRef.current[index] = el)}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleBackSpace(e, index)}
            maxLength={1} // Ensure each input box accepts only 1 character
            className="flex aspect-square w-12 h-12 items-center justify-center rounded-md border border-gray-400 bg-white p-2 text-center text-black outline-none"
          />
        ))}
      </div>

      <span className="m-0 h-fit p-0 leading-none">
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </span>
    </div>
  );
};

export default OtpInput;
