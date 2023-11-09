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
              specialized in Web Design & Development, UX / UI, Backend, and
              Front End Development.
            </p>
          </div>
        </div>
      </section>
      <section className="h-auto w-full flex flex-col pb-8 lg:pb-10">
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
              <p className="line-clamp-4 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
                According to a study, 75% of users judge a company&apos;s credit
                by its digital presence, can venture into the world of design
                and create a lasting impression.
              </p>
            </div>
            <div className="pl-8 border-l-2 border-neutral-400 dark:border-neutral-700">
              <h1 className="text-5xl text-neutral-400 dark:text-neutral-700">
                02
              </h1>
              <h2 className="mt-10 text-2xl">Development</h2>
              <p className="line-clamp-4 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
                Having footprints in the industry for more than 7 years, I can
                help you with the digital transformation of ideas into reality.
              </p>
            </div>
            <div className="pl-8 border-l-2 border-neutral-400 dark:border-neutral-700">
              <h1 className="text-5xl text-neutral-400 dark:text-neutral-700">
                03
              </h1>
              <h2 className="mt-10 text-2xl">Consultation</h2>
              <p className="line-clamp-4 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
                Sometimes you just need a second opinion. Understanding the
                requirements of your business, can help build a better product.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-32 lg:mt-56 px-6 lg:px-16 pb-10">
          <h2 className="text-2xl lg:text-3xl font-poppins">
            Selected works ...
          </h2>
          <div className="mt-16">
            <div className="py-10 border-b border-neutral-400 dark:border-neutral-700 flex">
              <div className="lg:ml-20">
                <h1 className="text-3xl lg:text-5xl">Foggies Token</h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-5">
                  Next JS, Tailwind CSS, React-Scripts
                </p>
              </div>
              <div className="ml-auto whitespace-nowrap shrink-0">
                <h1 className="text-2xl lg:text-4xl dark:text-white font-thin">
                  / 2023
                </h1>
              </div>
            </div>
            <div className="py-10 border-b  border-neutral-400 dark:border-neutral-700 flex">
              <div className="lg:ml-20">
                <h1 className="text-3xl lg:text-5xl">Paste Jam</h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 dark:text-white/50 mt-5">
                  Next JS, Tailwind CSS, Firebase, Next-Auth
                </p>
              </div>
              <div className="ml-auto whitespace-nowrap shrink-0">
                <h1 className="text-2xl lg:text-4xl dark:text-white font-thin">
                  / 2022
                </h1>
              </div>
            </div>
            <div className="py-10 border-b border-neutral-400 dark:border-neutral-700 flex">
              <div className="lg:ml-20">
                <h1 className="text-3xl lg:text-5xl">Airshare</h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-5 line-clamp-1">
                  Next JS, Tailwind CSS, React-Scripts, WebSockets, Cloudinary
                </p>
              </div>
              <div className="ml-auto whitespace-nowrap shrink-0">
                <h1 className="text-2xl lg:text-4xl dark:text-white font-thin">
                  / 2023
                </h1>
              </div>
            </div>
            <div className="mt-16 lg:pl-20 flex items-center">
              <button className="flex group relative w-48 items-center justify-between rounded-full h-12 text-white dark:text-black dark:bg-white bg-black">
                <span className="text-sm md:text-base ml-5">
                  See all projects
                </span>
                <div className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 group-hover:h-10 group-hover:w-10 text-black dark:text-white overflow-hidden bg-white dark:bg-black rounded-full ml-7 flex items-center justify-center transition-all">
                  <span className="group-hover:visible invisible">
                    <Icon icon="iconoir:arrow-tr" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-60 px-6 lg:px-16 grid grid-cols-1 gap-7 lg:grid-cols-2">
          <div className="lg:pr-16">
            <h1 className="text-4xl lg:text-6xl font-light leading-[1.4] lg:leading-[1.2]">
              My way of getting <br /> things done
            </h1>
            <p className="leading-8 mt-10">
              Fast and transparent, the path to owning a website that will
              represent your brand in the best of light is only 4 weeks away.
              Standing by the Waterfall methodology, I assure a step by step
              completion of the whole process.
            </p>
          </div>
          <div className="lg:pl-16">
            <div className="py-6 border-b border-neutral-400 dark:border-neutral-700">
              <div className="flex items-center text-xl font-light">
                <span>01.</span>
                <span className="ml-4">UX / Wireframing</span>
                <button className="ml-auto">+</button>
              </div>
            </div>
            <div className="py-6 border-b border-neutral-400 dark:border-neutral-700">
              <div className="flex items-center text-xl font-light">
                <span>02.</span>
                <span className="ml-4">Web Design</span>
                <button className="ml-auto">+</button>
              </div>
            </div>
            <div className="py-6 border-b border-neutral-400 dark:border-neutral-700">
              <div className="flex items-center text-xl font-light">
                <span>03.</span>
                <span className="ml-4">Web Development</span>
                <button className="ml-auto">+</button>
              </div>
            </div>
            <div className="py-6 border-b border-neutral-400 dark:border-neutral-700">
              <div className="flex items-center text-xl font-light">
                <span>04.</span>
                <span className="ml-4">Web Analytics & Support</span>
                <button className="ml-auto">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 lg:px-16 mt-44 pb-8">
          <h1 className="text-3xl lg:text-4xl font-poppins relative lg:leading-[1.5] leading-[1.4] max-w-2xl">
            <div className="h-4 w-4 bg-green-500 rounded-full absolute left-0 top-0 z-10"></div>
            <img
              className="h-12 lg:h-14 w-12 lg:w-14 absolute top-0 left-0 rounded-full"
              src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1699544530/Personal/Screenshot_2023-11-09_at_9.11.34_PM_dfr99a.png"
              alt=""
            />
            <span className="pl-14 lg:pl-16">Let&apos;s</span> talk about a
            project, collaboration or an idea you may have
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
      </section>
      <footer className="mt-20 mb-10 border-t max-w-7xl mx-auto px-6 lg:px-0">
        <div className="w-full">
          <div className="flex items-center justify-between mt-10">
            <span className="text-sm">
              © 2023All Rights Reserved. Design & Coded with ❤️️
            </span>
            <ul className="flex items-center space-x-8 text-sm">
              <li>LinkedIn</li>
              <li>Github</li>
              <li>Email</li>
              <li>Instagram</li>
            </ul>
            <ul className="flex items-center space-x-8 text-sm">
              <li>Support</li>
              <li>Share</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
