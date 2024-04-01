import React from 'react';
import Typewriter from 'typewriter-effect';

const AutoType = () => {
  return (
    <div>
     
      <Typewriter
        options={{
          strings: [
            "Car Care & Repair",
            "Vehicle Servicing ",
            "Collision Repair ",
            "Diagnostic repair"
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
