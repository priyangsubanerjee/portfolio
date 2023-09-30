import Image from "next/image";
import { Inter } from "next/font/google";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Runway from "@/components/Runway";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [4800]);
  }, [parked]);

  return (
    <main className="fixed inset-0 max-h-full w-full overflow-auto flex flex-col">
      <div className="max-h-full h-full w-full bg-[#ffffff] relative flex flex-col pb-10">
        <Navbar />
        <Runway />
        <div className="mt-auto lg:flex lg:justify-between lg:items-end px-6 lg:px-16">
          <h1 className="text-[65px] lg:text-[120px] text-neutral-800 text-left leading-[60px] lg:leading-[95px] font-black font-Bebas Neue">
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
          <p className="lg:w-[30%] text-right leading-7 mt-6 lg:mt-0">
            specialized in Web Design & Development, UX / UI, Webflow, and Front
            End Development.
          </p>
        </div>
      </div>
    </main>
  );
}
