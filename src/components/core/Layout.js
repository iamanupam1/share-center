"use client";
import { CORE_SIDE_NAV } from "@/utils";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeroIcon from "../common/HeroIcon";

const Layout = ({ children }) => {
  const activePathname = usePathname();
  return (
    <div id="view" className="h-full w-screen flex flex-row">
      <div
        id="sidebar"
        className="bg-gray-900 h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out border-r-2 border-teal-500 text-white"
      >
        <div className="space-y-6 md:space-y-10 mt-10">
        <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
            Share Center<span className="text-teal-600">.</span>
          </h1>
          <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
            <input
              type="text"
              className="w-full rounded-tl-md rounded-bl-md px-2 py-1 text-sm text-gray-600 focus:outline-none"
              placeholder="Search"
            />
            <button className="rounded-tr-md rounded-br-md px-2 py-1 hidden md:block">
              <HeroIcon name="MagnifyingGlassIcon" className="text-white-500" />
            </button>
          </div>
          <div id="menu" className="flex flex-col space-y-2">
            {CORE_SIDE_NAV.map((nav, index) => {
              return (
                <Link
                  key={index}
                  href={nav.url}
                  className={`flex flex-row items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition text-white ${
                    activePathname === nav.url ? "bg-teal-500" : ""
                  }`}
                >
                  <HeroIcon name={nav.icon} className="text-white-500 mr-2" />
                  <span>{nav.name}</span>
                </Link>
              );
            })}
            <a
              type="button"
              onClick={() => signOut()}
              className="flex flex-row items-center text-sm font-medium text-gray-700 py-2 px-2 rounded-md transition hover:bg-red-500 text-white hover:text-white cursor-pointer"
            >
              <HeroIcon
                name={"ArrowRightOnRectangleIcon"}
                className="text-white-500 mr-2"
              />
              <span className="">Log Out</span>
            </a>
          </div>
        </div>
      </div>
      <div className="p-5 h-screen md:block shadow-xl w-full overflow-x-hidden transition-transform duration-300 ease-in-out">
        {children}
      </div>
    </div>
  );
};

export default Layout;
