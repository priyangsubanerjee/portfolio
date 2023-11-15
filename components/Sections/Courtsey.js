/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function Courtsey() {
  return (
    <div className="px-6 lg:px-16 mt-44 pb-8">
      <h1 className="text-3xl lg:text-4xl font-poppins relative lg:leading-[1.5] leading-[1.4] max-w-2xl">
        <div className="h-4 w-4 bg-green-500 rounded-full absolute left-0 top-0 z-10"></div>
        <img
          className="h-12 lg:h-14 w-12 lg:w-14 absolute top-0 left-0 rounded-full object-cover"
          src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1700054426/Personal/IMG_5D022AA3C935-1_psqtcn.jpg"
          alt=""
        />
        <span className="pl-14 lg:pl-16">Let&apos;s</span> talk about a project,
        collaboration or an idea you may have
      </h1>
      <button className="flex group relative w-48 items-center justify-between rounded-full h-12 mt-10 text-white dark:text-black dark:bg-white bg-black">
        <span className="text-sm md:text-base ml-5">Drop me a line</span>
        <div className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 group-hover:h-10 group-hover:w-10 text-black dark:text-white overflow-hidden bg-white dark:bg-black rounded-full ml-7 flex items-center justify-center transition-all">
          <span className="group-hover:visible invisible">
            <Icon icon="iconoir:arrow-tr" />
          </span>
        </div>
      </button>
    </div>
  );
}

export default Courtsey;
