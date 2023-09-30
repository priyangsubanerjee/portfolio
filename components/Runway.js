import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

function Runway() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [5800]);
  }, [parked]);

  return (
    <div
      style={{
        borderLeft: parked ? "2px solid rgb(239 68 68)" : "2px solid #000",
      }}
      id="runway"
      className={`h-auto my-auto mb-10 flex-grow w-auto ml-16 lg:ml-36 relative
            ${
              parked ? "bg-red-50" : "bg-neutral-50"
            } transition-all duration-500`}
    >
      <div className="flex items-center justify-center absolute top-0 left-0 -translate-x-[52%] -translate-y-1/2">
        <div
          style={{
            background: parked ? "rgb(239 68 68)" : "#000",
          }}
          className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center relative"
        >
          <div className="w-6 h-6 -z-10 rounded-full bg-black/50 animate-ping flex items-center justify-center absolute inset-0"></div>
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
        className="absolute rotate-180 left-0 -translate-x-[51%] -translate-y-3"
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
    </div>
  );
}

export default Runway;
