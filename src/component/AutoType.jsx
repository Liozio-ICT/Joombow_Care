import React from 'react';
import Typewriter from 'typewriter-effect';

const AutoType = () => {
  return (
    <div>
     
      <Typewriter
        options={{
          strings: [
            "EID AL-FITR",
            "EID MUBARAK",
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
