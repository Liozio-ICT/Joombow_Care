
import React from 'react';
import Typewriter from 'typewriter-effect';

const AutoType = () => {
  return (
    <div>
     
      <Typewriter
        options={{
          strings: [
            "Electrical Repairs",
            "Car Care & Repair",
            "Car Wash",
            "Collision Repair ",
            "Diagnostic repair", 
          ],
          autoStart: true,
          loop: true,
          typeSpeed: 1000
        }}
      />
    </div>
  );
};

export default AutoType;
