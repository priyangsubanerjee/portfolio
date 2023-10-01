/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function Stamp() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [4500]);
  }, [parked]);

  return (
    <div
      className={`h-28 w-28 lg:h-44 lg:w-44 mb-8 lg:mr-2 lg:static absolute -top-[255%] right-0
              ${parked ? "opacity-100" : "opacity-0"}
              transition-all duration-1000`}
    >
      <div className="h-full w-full relative">
        <button className="flex h-10 w-10 group z-20 hover:w-[65px] hover:h-[65px] lg:hover:w-24 lg:hover:h-24 bg-black dark:bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all items-center justify-center text-white dark:text-black overflow-auto">
          <span className="opacity-0 group-hover:opacity-100 text-white dark:text-black">
            <Icon height={40} icon="mingcute:telegram-fill" />
          </span>
        </button>
        <img
          src={
            "https://res.cloudinary.com/db9kd4qbi/image/upload/v1696093664/Personal/Think_Develop_Fix_Repeat_wxgncq.png"
          }
          alt=""
          className="animate-rotate visible dark:invisible absolute inset-0 h-full w-full pointer-events-none select-none"
        />
        <img
          src={
            "https://res.cloudinary.com/db9kd4qbi/image/upload/v1696100246/Personal/Think_Develop_Fix_Repeat_2_grudmq.png"
          }
          alt=""
          className="animate-rotate invisible dark:visible absolute inset-0 h-full w-full pointer-events-none select-none"
        />
      </div>
    </div>
  );
}

export default Stamp;
