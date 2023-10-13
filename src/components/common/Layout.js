"use client";

import { CORE_SIDE_NAV } from "@/utils";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeroIcon from "./HeroIcon";
import { Avatar, Dropdown } from "flowbite-react";
import PopupModal from "./modal/PopupModal";
import { useState } from "react";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useState(undefined);
  const userFullName = session?.user.fullName;
  const userEmail = session?.user.email;
  const imagePlaceholder = userFullName?.slice(0, 2).toUpperCase() || "NA";
  const activePathname = usePathname();
  return (
    <div className="bg-gray-900 dark:bg-gray-900">
      <nav className="fixed z-30 w-full bg-gray-900 border-b border-teal-600">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link href="/core" className="flex ml-2 md:mr-24">
                <h1 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                  Share Center<span className="text-teal-600">.</span>
                </h1>
              </Link>
              <form className="hidden lg:block lg:pl-3.5">
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-96">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <HeroIcon
                      name="MagnifyingGlassIcon"
                      className="text-black-600"
                    />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <button type="button" className="p-2 text-gray-500 rounded-lg">
                <span className="sr-only">View notifications</span>
                <HeroIcon name={"BellIcon"} className="text-white-500" />
              </button>
              <div className="flex items-center ml-3">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      placeholderInitials={imagePlaceholder}
                      rounded
                      size="sm"
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{userFullName}</span>
                    <span className="block truncate text-sm font-medium">
                      {userEmail}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <Link href="/core">Dashboard</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/core/user/profile">Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/core/manage">Manage Notifier</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => setModalOpen("pop-up")}>
                    Logout
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex pt-16 overflow-hidden h-[100vh] bg-gray-50 dark:bg-gray-900">
        <aside
          id="sidebar"
          className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
          aria-label="Sidebar"
        >
          <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-gray-900 border-r border-gray-200">
            <div className="flex flex-col flex-1 pt-6 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 space-y-1 bg-gray-900 divide-y divide-gray-200">
                <ul className="pb-2 space-y-2">
                  {CORE_SIDE_NAV.map((nav, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={nav.url}
                          className={`flex items-center p-2 text-base text-gray-900 rounded-lg text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white rounded-md transition text-white ${
                            activePathname === nav.url ? "bg-teal-500" : ""
                          }`}
                        >
                          <HeroIcon
                            name={nav.icon}
                            className="text-white-500 mr-2"
                          />
                          <span>{nav.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="pt-2 space-y-2">
                  <a
                    type="button"
                    onClick={() => setModalOpen("pop-up")}
                    className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-red-500 text-white hover:text-white cursor-pointer"
                  >
                    <HeroIcon
                      name={"ArrowRightOnRectangleIcon"}
                      className="text-white-500"
                    />
                    <span className="ml-3">Log Out</span>
                  </a>
                  <PopupModal
                    handleSubmit={() => signOut()}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    modalText="Are you sure you want to logout?"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div
          className="fixed inset-0 z-10 hidden bg-gray-900/50"
          id="sidebarBackdrop"
        />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64"
        >
          <main>
            <div className="px-4 pt-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
