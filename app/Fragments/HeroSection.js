"use client";

import React, { useState, useEffect } from "react";
import Runway from "../Components/Runway";
import Stamp from "../Components/Stamp";

function HeroSection() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [4500]);
  }, [parked]);

  return (
    <section className="max-h-[calc(100%-64px)] lg:max-h-[calc(100%-96px)] h-full w-full bg-transparent relative flex flex-col pb-8 lg:pb-10">
      <Runway />
      <div className="mt-auto lg:flex lg:justify-between lg:items-end px-6 lg:px-16 relative">
        <h1 className="text-[60px] tracking-tight  lg:text-[100px] text-neutral-800 dark:text-neutral-200 text-left leading-[55px] lg:leading-[85px] font-black">
          FULL <br />{" "}
          <span
            className={`
                      ${
                        parked ? "text-red-500" : "text-neutral-500"
                      } transition-all
            `}
          >
            STACK
          </span>{" "}
          <br /> DEVELOPER
        </h1>
        <div className="lg:w-[30%] flex flex-col items-end relative">
          <Stamp />
          <p className="text-right leading-6 lg:leading-7 mt-6 lg:mt-0 text-sm lg:text-base">
            specialized in Web Design & Development, UX / UI, Backend, and Front
            End Development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
