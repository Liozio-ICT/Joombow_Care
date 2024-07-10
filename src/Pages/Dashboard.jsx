import Card from "../components/Card";
import { cards, extras } from "../constants/cards";
import { user } from "../layouts/constants";

import "./dash.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const submit = (form) => {
    form.preventDefault();
    console.log({ search });
  };
  return (
    <main className="page relative isolate overflow-y-auto overflow-x-clip !p-0 *:p-5 md:bg-black  *:md:my-5 *:md:p-5">
      <div className="sticky top-0 !m-0 bg-[#FD3535] md:absolute md:inset-0 md:z-[-999] md:rounded-l-md">
        <div className="flex grid gap-5 md:hidden">
          <div className="flex w-full grow items-center justify-between gap-2">
            <h1 className="grid grow text-3xl text-white *:truncate">
              <span>Hello</span>
              <span>{user.name.split(" ")[0]}</span>
            </h1>

            <Link
              to={"/notifications"}
              className="relative flex items-center justify-center text-white"
            >
              <FaBell size={24} />
              <span className="absolute right-1 top-1 size-2 rounded-full bg-[#FC2929]"></span>
            </Link>
          </div>
          <form
            onSubmit={submit}
            className="flex items-center gap-2 overflow-clip rounded-lg bg-[#BA9696]"
          >
            <FaSearch size={32} className="pl-2" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 grow border-none bg-transparent p-2 pr-3 outline-none"
            />
          </form>
        </div>
      </div>
      <h1 className=" hidden text-5xl text-white md:block">
        Welcome to Joombow
      </h1>

      <div className="*:my-5">
        <h2 className="text-xl font-semibold md:text-2xl">Quick Actions</h2>
        <div className="gridded">
          {cards.map((card, idx) => (
            <Card {...card} key={idx} />
          ))}
        </div>

        <div className="hidden *:my-5 md:block">
          <h2 className="text-2xl font-semibold">More Services</h2>
          <div className="overflow-clip rounded-xl bg-[#D9D9D9]">
            <h3 className="p-3 text-center text-2xl font-semibold text-[#FC0509]">
              {" "}
              20% OFF All Car Care For First 100 Registered Users
            </h3>
            <div className="bg-[#DAC5C5] py-5 pt-8">
              <div className="gridded ">
                {extras.map((card, idx) => (
                  <Card {...card} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
