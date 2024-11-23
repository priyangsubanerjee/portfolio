import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function Introduction() {
  return (
    <div
      id="home"
      className="px-6 lg:px-16 pt-24 lg:flex items-center justify-between"
    >
      <div className="lg:w-[60%]">
        <Icon height={40} icon="icon-park-outline:quote" />
        <p className="text-base mt-5 md:text-lg lg:text-[20px] leading-8 md:leading-9 lg:leading-[45px] text-neutral-700 dark:text-neutral-300 font-normal font-poppins">
          I transform concepts into pixel-perfect, functional websites. From
          responsive front-end interfaces that adapt to any device, to robust
          back-end systems that power seamless experiences, I&apos;m here to
          bring your online vision to life, leaving a lasting impression on the
          digital world. Let&apos;s collaborate and turn your ideas into an
          exceptional web reality.
        </p>

        <Link href="/message">
          <button className="flex group relative w-48 items-center justify-between rounded-full h-12 mt-10 text-white dark:text-black dark:bg-white bg-black">
            <span className="text-sm md:text-base ml-5">Drop me a line</span>
            <div className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 group-hover:h-10 group-hover:w-10 text-black dark:text-white overflow-hidden bg-white dark:bg-black rounded-full ml-7 flex items-center justify-center transition-all">
              <span className="group-hover:visible invisible">
                <Icon icon="iconoir:arrow-tr" />
              </span>
            </div>
          </button>
        </Link>
      </div>
      <div className="w-fit hidden lg:block">
        <p className="border-b pb-1 text-neutral-600 border-neutral-600 dark:border-neutral-400 dark:text-neutral-400">
          Let&apos;s get connected
        </p>
        <ul className="space-y-3 mt-6 text-neutral-900 dark:text-neutral-300">
          <li>
            <Link href={"https://github.com/priyangsubanerjee"}>Github</Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/priyangsu-banerjee/"}>
              Linkedin
            </Link>
          </li>
          <li>
            <Link href={"https://www.instagram.com/priyangsu__banerjee/"}>
              Instagram
            </Link>
          </li>
          <li>
            <Link href={"https://www.quora.com/profile/Priyangsu-Banerjee-1"}>
              Quora
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Introduction;
