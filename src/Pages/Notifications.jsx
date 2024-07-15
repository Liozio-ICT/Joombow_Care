import TitleHeader from "../components/TitleHeader";
import bellIcon from "../assets/gold-bell.svg";
import { ScrollRestoration } from "react-router-dom";

const Notifications = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="!bg-brand-red !pt-10 md:bg-transparent md:!pt-5">
        <TitleHeader title="Notifications" />
      </div>

      <div className="mx-auto my-5 flex max-w-[75%] flex-col gap-5 *:mx-auto *:rounded *:p-5 md:my-10 md:gap-10">
        <div className="min-h-[4rem] w-full bg-brand-red"></div>

        <div className="aspect-square !rounded-full bg-white">
          <img
            src={bellIcon}
            alt="back"
            className="aspect-square max-w-[4rem] object-contain"
          />
        </div>

        <div className="grid w-full gap-5 !px-0 text-center *:w-full">
          <p>You’ve no Notification yet!</p>
          <small className="mx-auto max-w-[15rem]">
            When notification history appear, you’ll see them here
          </small>
        </div>
      </div>
    </>
  );
};

export default Notifications;
