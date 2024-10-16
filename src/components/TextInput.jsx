import { useState, useRef } from "react";
import { cn } from "../utils/tailwind";
import { useEffect } from "react";
import { max } from "date-fns";

const TextInput = ({
  label,
  error = '',
  type = "text",
  name,
  placeholder = "",
  value,
  setValue,
  className = '',
  maxLength,
  ...rest
}) => {

  const [textareaHeight, setTextareaHeight] = useState('auto');
  const textRef = useRef();

  const handleTextareaChange = (e) => {
    setValue(e.target.value);
    resizeHeight()
  };

  const textareaStyle = {
    height: textareaHeight,
    resize: 'none',
    maxHeight: '500px',
  };

  const resizeHeight = () => {
    if (textRef.current) {
      textRef.current.style.height = `auto`;
      if (textRef.current.value?.length)
        textRef.current.style.height = `${textRef.current?.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resizeHeight()
  }, [value])

  return (
    <div className="grid w-full gap-2">
      <label>{label}</label>
      <div className={cn(["input flex w-full overflow-clip rounded-md border border-current bg-transparent md:bg-opacity-50", className])}>
        <textarea
          {...rest}
          name={name}
          placeholder={placeholder}
          ref={textRef}
          value={value}
          onChange={handleTextareaChange}
          className={cn(["grow border-none bg-transparent p-2 px-3 outline-none h-fit resize-y"])}
          rows={rest.row ?? 1}
          style={textareaStyle}
        />
      </div>

      <span className="m-0 h-fit p-0 leading-none">
        {error && <span>{error}</span>}
      </span>
    </div>
  );
};

export default TextInput;
