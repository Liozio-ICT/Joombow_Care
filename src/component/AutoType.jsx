
import React from 'react';
import Typewriter from 'typewriter-effect';

const AutoType = () => {
  return (
    <div>
     
      <Typewriter
        options={{
          strings: [
            "Joombow Car Care and Repair Centre",
            "Wishes you all a",
            "Happy Easter Celebration ",
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
