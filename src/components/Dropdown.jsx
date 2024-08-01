import { useRef, useState } from "react";
import { cn } from "../utils/tailwind";

const Dropdown = ({ label, justify = "center", children, className, childrenClass }) => {
  // @ts-ignore
  const toggleBtn = useRef();
  const [open, setOpen] = useState(false);

  window.addEventListener("click", (e) => {
    setOpen(false);
  });

  return (
    <div className={cn("relative grid", className)}>
      <button
        type="button"
        ref={toggleBtn}
        className="flex items-center gap-x-1 leading-6 z-10"
        aria-expanded="false"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        {label}
      </button>
      <div
        className="transition-all duration-500 absolute inset-0 h-full"
      >
        <div className={cn(["z-10 transition-all duration-500 absolute translate-y-full bottom-0 grid gap-1 shadow bg-white rounded overflow-clip mx-auto min-w-fit",
          childrenClass,
          { "!left-0": justify === 'left' },
          { "!right-0": justify === 'right' },
          { "h-0 scale-50 origin-top opacity-0": !open }
        ])}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
