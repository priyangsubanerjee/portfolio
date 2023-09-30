/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Runway from "@/components/Runway";
import CircleType from "circletype";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [5800]);
  }, [parked]);

  return (
    <>
      <section className="max-h-full h-full w-full bg-[#ffffff] relative flex flex-col pb-10">
        <Navbar />
        <Runway />
        <div className="mt-auto lg:flex lg:justify-between lg:items-end px-6 lg:px-16">
          <h1 className="text-[60px] lg:text-[120px] text-neutral-800 text-left leading-[60px] lg:leading-[105px] font-black">
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
            <div
              className={`h-28 w-28 lg:h-44 lg:w-44 mb-8 lg:mr-2 lg:static absolute -top-[235%] right-0
              ${parked ? "opacity-100" : "opacity-0"}
              transition-all duration-1000`}
            >
              <div className="h-full w-full relative">
                <button className="hidden lg:block h-10 w-10 z-20 hover:w-24 hover:h-24 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all"></button>
                <img
                  src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1696093664/Personal/Think_Develop_Fix_Repeat_wxgncq.png"
                  alt=""
                  className="animate-rotate absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <p className="text-right leading-7 mt-6 lg:mt-0">
              specialized in Web Design & Development, UX / UI, Webflow, and
              Front End Development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
