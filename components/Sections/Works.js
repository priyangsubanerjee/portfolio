import { Icon } from "@iconify/react";
import React from "react";

function Works() {
  return (
    <div id="work" className="pt-32 lg:pt-16 lg:mt-32 px-6 lg:px-16 pb-10">
      <h2 className="text-2xl lg:text-3xl font-poppins">Selected works ...</h2>
      <div className="mt-16">
        <div className="py-10 border-b border-neutral-400 dark:border-neutral-700 flex">
          <div className="lg:ml-20">
            <h1 className="text-3xl lg:text-5xl">Foggies Token</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-5">
              Next JS, Tailwind CSS, React-Scripts
            </p>
          </div>
          <div className="ml-auto whitespace-nowrap shrink-0">
            <h1 className="text-2xl lg:text-4xl dark:text-white font-thin">
              / 2023
            </h1>
          </div>
        </div>
        <div className="py-10 border-b  border-neutral-400 dark:border-neutral-700 flex">
          <div className="lg:ml-20">
            <h1 className="text-3xl lg:text-5xl">Paste Jam</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 dark:text-white/50 mt-5">
              Next JS, Tailwind CSS, Firebase, Next-Auth
            </p>
          </div>
          <div className="ml-auto whitespace-nowrap shrink-0">
            <h1 className="text-2xl lg:text-4xl dark:text-white font-thin">
              / 2022
            </h1>
          </div>
        </div>
        <div className="py-10 border-b border-neutral-400 dark:border-neutral-700 flex">
          <div className="lg:ml-20">
            <h1 className="text-3xl lg:text-5xl">Airshare</h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-5 line-clamp-1">
              Next JS, Tailwind CSS, React-Scripts, WebSockets, Cloudinary
            </p>
          </div>
          <div className="ml-auto whitespace-nowrap shrink-0">
            <h1 className="text-2xl lg:text-4xl dark:text-white font-thin">
              / 2023
            </h1>
          </div>
        </div>
        <div className="mt-16 lg:pl-20 flex items-center">
          <button className="flex group relative w-48 items-center justify-between rounded-full h-12 text-white dark:text-black dark:bg-white bg-black">
            <span className="text-sm md:text-base ml-5">See all projects</span>
            <div className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 group-hover:h-10 group-hover:w-10 text-black dark:text-white overflow-hidden bg-white dark:bg-black rounded-full ml-7 flex items-center justify-center transition-all">
              <span className="group-hover:visible invisible">
                <Icon icon="iconoir:arrow-tr" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Works;
