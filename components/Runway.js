import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";

function Runway() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    var tl = gsap.timeline();
    tl.to("#plane", {
      duration: 4.7,
      ease: "easeInOut",
      opacity: 1,
      top: "98%",
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [4800]);
  }, [parked]);

  return (
    <div
      id="runway"
      className={`h-auto my-auto mb-10 flex-grow w-auto ml-16 lg:ml-36 relative
            ${
              parked
                ? "bg-[#ffe9e9] dark:bg-[#e344441e] border-l-[2px] border-[#EF4444]"
                : "bg-neutral-50 dark:bg-neutral-300/10 border-l-[2px] border-black dark:border-white/50"
            }
            
          `}
    >
      <div className="flex z-30 items-center justify-center absolute top-0 left-0 -translate-x-[53%] -translate-y-1/2">
        <div
          className={`
          w-6 h-6 rounded-full flex items-center justify-center relative
          ${
            parked ? "bg-[#EF4444] dark:bg-[#EF4444]" : "bg-black dark:bg-white"
          }
          `}
        >
          <div className="w-6 h-6 rounded-full bg-black/50 dark:bg-white/50 animate-ping flex items-center justify-center absolute inset-0"></div>
        </div>
      </div>

      <button
        id="plane"
        style={{
          opacity: 0.5,
        }}
        className={`absolute rotate-180 left-0 z-30 -translate-x-[51%] -translate-y-3 ${
          parked
            ? "text-[#EF4444] dark:text-[#EF4444]"
            : "text-neutral-800 dark:text-white"
        }`}
      >
        <Icon height={30} icon="ri:plane-fill" />
      </button>

      <span
        className={`absolute left-0 text-neutral-800 dark:text-neutral-300 tracking-widest -translate-x-[60%] -rotate-90 top-1/2 -translate-y-1/2 text-xs uppercase font-mono ${
          parked ? "opacity-100" : "opacity-0"
        } transition-all duration-500
        }`}
      >
        7 years of experience
      </span>
      <div
        className={`absolute inset-0 h-full w-1/2 bg-gradient-to-r from-[#ffe9e9] dark:from-transparent to-transparent z-20
                ${parked ? "opacity-100" : "opacity-0"}
        `}
      ></div>
      <div
        className={`h-full flex items-center relative ${
          parked ? "opacity-100" : "opacity-0"
        }
      `}
      >
        <div className="absolute top-3 right-3 text-xs">
          <span className="text-neutral-800 dark:text-neutral-400">
            0:00:00
          </span>
        </div>
        <Marquee>
          <div></div>
        </Marquee>
      </div>
    </div>
  );
}

export default Runway;
