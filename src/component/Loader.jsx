// src/Loader.js

import React, { useState, useEffect } from 'react';

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
    <div className={`flex items-center bottom-0 bg-slate-100 left-0 right-0 fixed overflow-x-hidden top-0 w-full  justify-center z-50 h-screen ${isLoading ? 'block' : 'hidden'}`}>
      {/* <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div> */}
      
<div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
</div>
    </div>
  );
};

export default Loader;
