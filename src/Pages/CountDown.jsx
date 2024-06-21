import React from "react";
import { useState, useEffect } from "react";

function CountDown({ launchDate }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  //   console.log("newYear:", newYear);

  //   console.log(days);
  useEffect(() => {
    const timeId = setInterval(() => {
      const now = new Date().getTime();
      //   console.log(now)

      const distance = (launchDate - now) / 1000;

      if (distance > 0) {
        const days = Math.floor(distance / (60 * 60 * 24))
          .toString()
          .padStart(2, "0");
        const hours = Math.floor((distance / 60 / 60) % 24)
          .toString()
          .padStart(2, "0");
        const minutes = Math.floor((distance / 60) % 24)
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor(distance % 60)
          .toString()
          .padStart(2, "0");
        console.log(hours);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timeId);
      }
    }, 1000);
    return () => clearInterval(timeId);
  }, [launchDate]);

  return (
    <section className="max-w-[60%] m-auto bg-[url('/images/bg-stars.svg')]">
      <div className="flex items-center justify-center gap-4 deadline-flex-items">
        <div className="deadline-format">
          <div className="bg-[#33354f] font-bold text-center w-[8rem] h-[8rem] flex items-center justify-center rounded-sm text-[2.5rem] text-[#FD1014] days">
            {days}
          </div>
          <p className="text-[#8586a8] text-center text-sm pt-1">DAYS</p>
        </div>
        <div className="deadline-format">
          <div className="bg-[#33354f] font-bold text-center w-[8rem] h-[8rem] flex items-center justify-center  rounded-sm text-[2.5rem] text-[#FD1014] hours">
            {hours}
          </div>
          <p className="text-[#8586a8] text-center text-sm pt-1">HOURS</p>
        </div>
        <div className="deadline-format">
          <div className="bg-[#33354f] font-bold text-center w-[8rem] h-[8rem] flex items-center justify-center  rounded-sm text-[2.5rem] text-[#FD1014] minutes">
            {minutes}
          </div>
          <p className="text-[#8586a8] text-center text-sm pt-1">MINUTES</p>
        </div>
        <div className="deadline-format">
          <div className="bg-[#33354f] font-bold text-center w-[8rem] h-[8rem] flex items-center justify-center  rounded-sm text-[2.5rem] text-[#FD1014] seconds">
            {seconds}
          </div>
          <p className="text-[#8586a8] text-center text-sm pt-1">SECONDS</p>
        </div>
      </div>
    </section>
  );
}

export default CountDown;
