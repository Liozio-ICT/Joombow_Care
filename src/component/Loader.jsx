// src/Loader.js

import { useState, useEffect } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 4 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-[999999] flex h-screen w-full items-center justify-center overflow-x-hidden bg-slate-100 ${isLoading ? "block" : "hidden"}`}
    >
      {/* <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div> */}

      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
