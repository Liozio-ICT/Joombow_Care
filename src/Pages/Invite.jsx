import React from "react";
import TitleHeader from "../components/TitleHeader";

const Invite = () => {
  return (
    <>
      <div className="!pt-10 md:bg-transparent md:!pt-5">
        <TitleHeader title="REFER AND EARN WASH CREDIT" />
      </div>

      <div className="mx-auto my-5 flex max-w-[75%] flex-col gap-5 *:mx-auto *:rounded *:p-5 md:my-10 md:gap-10">
        <div className="bg-brand-red">
          Refer a friend and earn Wash Credit bonus, then drive in for FREE WASH
        </div>

        <div className="bg-[#D9D9D9] !py-3 text-center font-semibold leading-none text-black">
          Referral Code
          <span className="block text-brand-red">T3457FU</span>
        </div>
        <div className="w-full bg-[#7F7979]">
          <span className="mx-auto block max-w-[10rem]">
            Refer and Enjoy Our offer as you go ..........
          </span>
        </div>

        <div className="grid w-full gap-5 !px-0 *:w-full">
          <button
            type="button"
            className="rounded-2xl bg-brand-red/75 p-2 text-xl"
          >
            Invite Now
          </button>
          <button type="button" className="rounded-md bg-brand-red p-3 text-sm">
            Share link to invite
          </button>
        </div>
      </div>
    </>
  );
};

export default Invite;
