/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Runway from "@/components/Runway";
import Stamp from "@/components/Stamp";
import gsap from "gsap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [4800]);
  }, [parked]);

  return (
    <>
      <section className="max-h-full h-full w-full bg-transparent relative flex flex-col pb-5 lg:pb-10">
        <Navbar />
        <Runway />
        <div className="mt-auto lg:flex lg:justify-between lg:items-end px-6 lg:px-16">
          <h1 className="text-[60px] lg:text-[120px] text-neutral-800 dark:text-neutral-200 text-left leading-[60px] lg:leading-[105px] font-black">
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
            <p className="text-right leading-7 mt-6 lg:mt-0 text-sm lg:text-base">
              specialized in Web Design & Development, UX / UI, Webflow, and
              Front End Development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
