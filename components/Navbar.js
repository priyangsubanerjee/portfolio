/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import menu from "../static/navMenu";
import { useRouter } from "next/router";
import Link from "next/link";
import Fade from "react-reveal/Fade";

function Navbar() {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 inset-x-0 z-30">
      <div className="p-5 bg-transparent">
        <div className="flex items-center lg:justify-between lg:px-32">
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden backdrop-blur-2xl border ml-auto bg-zinc-800 border-white/10 rounded-full px-4 py-2 text-gray-200 text-sm font-medium flex items-center justify-center space-x-3"
          >
            <span>Menu</span>
            <span className="text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>

          <div className="fixed">
            <Fade when={isOpen}>
              {isOpen && (
                <div className="fixed inset-0 h-full w-full bg-black/50 backdrop-blur z-20"></div>
              )}
            </Fade>
            <Fade when={isOpen} duration={300}>
              {isOpen && (
                <div
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 h-full w-full z-30"
                >
                  <div
                    className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
                    id="headlessui-popover-panel-:Rqb6H1:"
                    tabindex="-1"
                    data-headlessui-state="open"
                  >
                    <div className="flex flex-row-reverse items-center justify-between">
                      <button
                        aria-label="Close menu"
                        className="-m-1 p-1"
                        type="button"
                        tabindex="0"
                        onClick={() => setIsOpen(false)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                        >
                          <path
                            d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Navigation
                      </h2>
                    </div>
                    <nav className="mt-6">
                      <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                        {menu.map((item, i) => {
                          return (
                            <li key={i}>
                              <Link href={item.path}>
                                <a className="block py-2">{item.name}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </Fade>
          </div>

          <div className="hidden lg:block"></div>

          <nav className="pointer-events-auto hidden md:block border bg-zinc-800/90 border-gray rounded-full px-6 z-20 backdrop-blur-xl">
            <ul className="flex items-center space-x-3">
              {menu.map((item, i) => {
                return (
                  <li key={i}>
                    <Link href={`${item.path}`}>
                      <div className="relative py-2 text-zinc-200 text-sm cursor-pointer transition-all">
                        <span
                          className={`px-2 ${
                            router.pathname == item.path && "text-teal-500"
                          } transition-all`}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`absolute -bottom-[1px] inset-x-0 bg-gradient-to-r from-teal-500/0 transition-all ${
                            router.pathname == item.path
                              ? "via-teal-500/70"
                              : "via-teal-500/0"
                          } to-teal-500/0 h-[1px]`}
                        ></span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button className="text-gray-300 bg-zinc-800 w-10 h-10 border border-gray rounded-full ml-3 flex items-center justify-center">
            <i className="bi bi-github text-lg lg:text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
