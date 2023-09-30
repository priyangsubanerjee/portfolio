import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Marquee from "react-fast-marquee";

function Runway() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [5900]);
  }, [parked]);

  return (
    <div
      style={{
        borderLeft: parked ? "2px solid rgb(239 68 68)" : "2px solid #000",
      }}
      id="runway"
      className={`h-auto my-auto mb-10 flex-grow w-auto ml-16 lg:ml-36 relative
            ${
              parked ? "bg-[#ffe9e9]" : "bg-neutral-50"
            } transition-all duration-500`}
    >
      <div className="flex z-30 items-center justify-center absolute top-0 left-0 -translate-x-[53%] -translate-y-1/2">
        <div
          style={{
            background: parked ? "rgb(239 68 68)" : "#000",
          }}
          className="w-6 h-6 rounded-full flex items-center justify-center relative"
        >
          <div className="w-6 h-6 rounded-full bg-black/50 animate-ping flex items-center justify-center absolute inset-0"></div>
        </div>
      </div>
      <motion.button
        style={{
          color: parked ? "rgb(239 68 68)" : "#000",
        }}
        initial={{
          opacity: 1,
          top: "0",
        }}
        animate={{
          opacity: 1,
          top: "98%",
        }}
        transition={{
          duration: 5,
          ease: "easeOut",
          delay: 1,
        }}
        className={`absolute rotate-180 left-0 z-30 -translate-x-[51%] -translate-y-3`}
      >
        <Icon height={30} icon="ri:plane-fill" />
      </motion.button>
      <span
        className={`absolute left-0 text-neutral-800 tracking-widest -translate-x-[65%] -rotate-90 top-1/2 text-xs uppercase font-mono ${
          parked ? "opacity-100" : "opacity-0"
        } transition-all duration-500
        }`}
      >
        7 years of experience
      </span>
      <div
        className={`absolute inset-0 h-full w-1/2 bg-gradient-to-r from-[#ffe9e9] to-transparent z-20
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
          <span className="text-neutral-800">accomplishment runway - 03</span>
        </div>
        <Marquee>
          <div></div>
        </Marquee>
      </div>
    </div>
  );
}

export default Runway;
