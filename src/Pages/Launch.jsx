import React from "react";
import CountDown from "./CountDown";
import Loader from "../component/Loader";

function Launch() {
  const newYear = new Date("September 2, 2024").getTime();
  return (
    <main className="flex h-screen text-center items-center justify-center bg-[#1f1f29]">
      <Loader />
      <header className="header">
        <div className="div-header">
          <h1 className="text-[#FD1014] text-7xl pt-12 px-0">
            We're launching soon!!
          </h1>
          <p class="text-white pb-14 pt-3 text-3xl header-content">
            Our Website is Under Development. Please check back soon!
          </p>
        </div>
        <CountDown launchDate={newYear} />

        <div className="py-10">
          <a className="text-white font-bold font-clash text-lg " href="/">
            Back To Homepage
          </a>
        </div>
      </header>
    </main>
  );
}

export default Launch;
