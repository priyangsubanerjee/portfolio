/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Courtsey() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{
        once: true,
      }}
      className="px-6 lg:px-16 mt-44 pb-8"
    >
      <h1 className="text-3xl lg:text-4xl font-poppins relative lg:leading-[1.5] leading-[1.7] max-w-2xl">
        <div className="h-4 w-4 bg-green-500 rounded-full absolute left-0 -top-2 lg:-top-5 z-10"></div>
        <img
          className="h-16 lg:h-20 w-16 lg:w-20 absolute -top-3 lg:-top-6 left-0 rounded-full object-cover pointer-events-none"
          src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1700054297/Personal/IMG_1137_htau8p.jpg"
          alt=""
        />
        <span className="pl-20 lg:pl-24">Let&apos;s</span> talk about a project,
        collaboration or an idea you may have
      </h1>
      <Link href={"/message"}>
        <button className="flex group relative w-48 items-center justify-between rounded-full h-12 mt-10 text-white dark:text-black dark:bg-white bg-black">
          <span className="text-sm md:text-base ml-5">Drop me a line</span>
          <div className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 group-hover:h-10 group-hover:w-10 text-black dark:text-white overflow-hidden bg-white dark:bg-black rounded-full ml-7 flex items-center justify-center transition-all">
            <span className="group-hover:visible invisible">
              <Icon icon="iconoir:arrow-tr" />
            </span>
          </div>
        </button>
      </Link>
    </motion.div>
  );
}

export default Courtsey;
