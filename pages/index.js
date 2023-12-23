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
import Introduction from "@/components/Sections/Introduction";
import Services from "@/components/Sections/Services";
import Works from "@/components/Sections/Works";
import Courtsey from "@/components/Sections/Courtsey";
import Process from "@/components/Sections/Process";
import Head from "next/head";
import Rate from "@/components/Modals/Rate";
import Link from "next/link";

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
      <Head>
        <title>Home | Full Stack Developer</title>
      </Head>
      <section className="max-h-[calc(100%-64px)] lg:max-h-[calc(100%-96px)] h-full w-full bg-transparent relative flex flex-col pb-8 lg:pb-10">
        <Runway />
        <div className="mt-auto lg:flex lg:justify-between lg:items-end px-6 lg:px-16">
          <h1 className="text-[60px] tracking-tight  lg:text-[100px] text-neutral-800 dark:text-neutral-200 text-left leading-[55px] lg:leading-[85px] font-black">
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
        <Introduction />
        <Services />
        <Works />
        <Process />
        <Courtsey />
      </section>
      <footer className="mt-20 mb-10 border-t dark:border-t-white/30 border-t-black/30 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="w-full">
          <div className="lg:flex space-y-10 lg:space-y-0 items-center justify-between mt-10">
            <span className="text-sm">
              © 2023All Rights Reserved. Design & Coded with ❤️️
            </span>
            <ul className="lg:flex space-y-3 lg:space-y-0 items-center lg:first-letter:space-x-8 text-sm">
              <li>
                <Link href={"https://github.com/priyangsubanerjee"}>
                  Github
                </Link>
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
                <Link
                  href={"https://www.quora.com/profile/Priyangsu-Banerjee-1"}
                >
                  Quora
                </Link>
              </li>
            </ul>
            <ul className="flex items-center space-x-6 lg:space-x-8 text-sm">
              <li>
                <Link href={"https://razorpay.me/@priyangsubanerjee"}>
                  Support
                </Link>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Priyangsu Banerjee",
                      text: "Full Stack Developer",
                      url: "https://priyangsubanerjee.com",
                    });
                  } else {
                    alert("Share not supported in your browser");
                  }
                }}
              >
                Share
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
