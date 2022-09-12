import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const menuItems = [
    {
      name: "About",
      path: "/",
    },
    {
      name: "Articles",
      path: "/articles",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Speaking",
      path: "/speaking",
    },
    {
      name: "Uses",
      path: "/uses",
    },
  ];

  return (
    <div className="w-full bg-transparent sticky top-4 left-0 flex justify-between items-center px-16 z-10">
      <img
        src="/logo.jpeg"
        className="h-12 w-12 rounded-full object-cover border"
        alt=""
      />
      <ul className="flex items-center px-3 text-gray-700 shadow-lg shadow-black/5 bg-white/70 rounded-full border backdrop-blur-md">
        {menuItems.map((item, i) => {
          return (
            <Link href={item.path} key={i}>
              <li
                className={`group py-3 px-5 text-sm relative cursor-pointer transition-all`}
              >
                <span
                  className={`${
                    router.pathname == item.path.toLocaleLowerCase()
                      ? "text-teal-500"
                      : "text-inherit"
                  } group-hover:text-teal-500 transition-all`}
                >
                  {item.name}
                </span>
                <span
                  className={`absolute inset-x-0 -bottom-px bg-gradient-to-r from-transparent ${
                    router.pathname == item.path.toLocaleLowerCase()
                      ? "via-teal-300"
                      : "via-teal-300/0"
                  } to-transparent h-px transition-all`}
                ></span>
              </li>
            </Link>
          );
        })}
      </ul>
      <button class="text-gray-800 bg-white/90 backdrop-blur shadow-lg shadow-black/5 text-xs grid place-content-center rounded-full h-12 w-12 border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
