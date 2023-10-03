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
    }, [4500]);
  }, [parked]);

  return (
    <>
      <section className="max-h-[calc(100%-64px)] lg:max-h-[calc(100%-96px)] h-full w-full bg-transparent relative flex flex-col pb-8 lg:pb-10">
        <Runway />
        <div className="mt-auto lg:flex lg:justify-between lg:items-end px-6 lg:px-16">
          <h1 className="text-[60px] tracking-tight  lg:text-[120px] text-neutral-800 dark:text-neutral-200 text-left leading-[55px] lg:leading-[105px] font-black">
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
              specialized in Web Design & Development, UX / UI, Webflow, and
              Front End Development.
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-[calc(100%-64px)] lg:min-h-[calc(100%-96px)] h-full w-full bg-transparent relative flex flex-col pb-8 lg:pb-10">
        <div className="px-6 lg:px-16 mt-24 lg:flex items-center justify-between">
          <div className="lg:w-[60%]">
            <Icon height={40} icon="icon-park-outline:quote" />
            <p className="text-base mt-5 md:text-lg lg:text-[20px] leading-8 md:leading-9 lg:leading-[45px] text-neutral-700 dark:text-neutral-300 font-normal font-poppins">
              I transform concepts into pixel-perfect, functional websites. From
              responsive front-end interfaces that adapt to any device, to
              robust back-end systems that power seamless experiences, I&apos;m
              here to bring your online vision to life, leaving a lasting
              impression on the digital world. Let&apos;s collaborate and turn
              your ideas into an exceptional web reality.
            </p>

            <button className="flex group relative w-48 items-center justify-between rounded-full h-12 mt-10 text-white dark:text-black dark:bg-white bg-black">
              <span className="text-sm md:text-base ml-5">Drop me a line</span>
              <div className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 group-hover:h-10 group-hover:w-10 text-black dark:text-white overflow-hidden bg-white dark:bg-black rounded-full ml-7 flex items-center justify-center transition-all">
                <span className="group-hover:visible invisible">
                  <Icon icon="iconoir:arrow-tr" />
                </span>
              </div>
            </button>
          </div>
          <div className="w-fit hidden lg:block">
            <p className="border-b pb-1 text-neutral-600 border-neutral-600 dark:border-neutral-400 dark:text-neutral-400">
              Let&apos;s get connected
            </p>
            <ul className="space-y-3 mt-6 text-neutral-900 dark:text-neutral-300">
              <li>Github</li>
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Quora</li>
            </ul>
          </div>
        </div>

        <div className="mt-56 px-6 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-poppins">
            I can help you with ...
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20 mb-10">
            <div className="pl-8 border-l-2 border-neutral-400 dark:border-neutral-700">
              <h1 className="text-5xl text-neutral-400 dark:text-neutral-700">
                01
              </h1>
              <h2 className="mt-10 text-2xl">Design</h2>
              <p className="line-clamp-3 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur libero doloremque quisquam debitis doloribus fuga
                quas, ea porro deleniti, neque magnam commodi, est quos esse!
                Nemo impedit laborum quis vel.
              </p>
            </div>
            <div className="pl-8 border-l-2 border-neutral-400 dark:border-neutral-700">
              <h1 className="text-5xl text-neutral-400 dark:text-neutral-700">
                02
              </h1>
              <h2 className="mt-10 text-2xl">Design</h2>
              <p className="line-clamp-3 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur libero doloremque quisquam debitis doloribus fuga
                quas, ea porro deleniti, neque magnam commodi, est quos esse!
                Nemo impedit laborum quis vel.
              </p>
            </div>
            <div className="pl-8 border-l-2 border-neutral-400 dark:border-neutral-700">
              <h1 className="text-5xl text-neutral-400 dark:text-neutral-700">
                03
              </h1>
              <h2 className="mt-10 text-2xl">Design</h2>
              <p className="line-clamp-3 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur libero doloremque quisquam debitis doloribus fuga
                quas, ea porro deleniti, neque magnam commodi, est quos esse!
                Nemo impedit laborum quis vel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
