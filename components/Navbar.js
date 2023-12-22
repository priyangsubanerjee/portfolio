/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [nTopExpanded, setNTopExpanded] = useState(false);
  const [nAirplaneState, setNAirplaneState] = useState("inAir"); // inAir, landed, expedite
  const [nStatus, setNStatus] = useState("Approaching Runway 07");
  const toggleNav = () => {
    if (nTopExpanded) {
      closeNav();
      setNTopExpanded(false);
    } else {
      openNav();
      setNTopExpanded(true);
    }
  };

  const openNav = () => {
    const parentDiv = document.getElementById("navmenu");
    const mainLayout = document.getElementById("mainLayout");

    // disable scroll

    parentDiv.style.transform = "translateY(0%)";
    mainLayout.style.overflow = "hidden";
    setNStatus("Approaching Runway 07");
    setNAirplaneState("touchDown");
    resetTouchPoint();
    resetAirplane();

    // translate airplane to 60%
    gsap
      .to("#plane2", {
        duration: 4,
        delay: 0.5,
        left: "60%",
      })
      .then(() => {
        gsap.to("#runwayMarking", {
          duration: 4,
          left: "-20%",
        });
        setNAirplaneState("landed");
        setNStatus("Taxiing");
      });

    // translate runway marking to -20%
  };

  const closeNav = (status, destination) => {
    const parentDiv = document.getElementById("navmenu");
    const mainLayout = document.getElementById("mainLayout");

    // disable scroll

    setNAirplaneState("expedite");
    setNStatus(status ? status : "Expedite");

    gsap
      .to("#plane2", {
        duration: 1,
        left: "100%",
        ease: "power1.in",
      })
      .then(() => {
        resetTouchPoint();
        resetAirplane(2);
        setNAirplaneState("inAir");
        setNStatus("Approaching Runway 07");
        parentDiv.style.transform = "translateY(-100%)";
        mainLayout.style.overflow = "auto";

        if (destination) {
          router.push(destination);
        }
      });
  };

  const resetTouchPoint = () => {
    gsap.to("#runwayMarking", {
      left: "10%",
    });
  };

  const resetAirplane = (delay) => {
    gsap.to("#plane2", {
      left: "-30%",
      delay: delay ? delay : 0,
    });
  };

  return (
    <>
      {/* normal navbar */}

      <motion.nav
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        className="px-6 bg-white dark:bg-black lg:px-16 shrink-0 h-16 lg:h-24 flex items-center justify-between relative z-50"
      >
        <div>
          <Link href={"/"}>
            <h1 className="font-semibold text-xl lg:text-2xl text-neutral-950 dark:text-slate-100">
              Priyangsu <span className="text-neutral-500">Banerjee.</span>
            </h1>
          </Link>
        </div>
        <ul
          className={`hidden text-neutral-700 dark:text-neutral-300 lg:flex items-center justify-center space-x-9 absolute left-1/2 -translate-x-1/2`}
        >
          <li>
            <Link href={"/#home"}>Home</Link>
          </li>
          <li>
            <Link href={"/#work"}>Work</Link>
          </li>
          <li>
            <Link href={"/#process"}>Process</Link>
          </li>
          <li>
            {" "}
            <Link href={"/message"}>Make it happen</Link>
          </li>
          <li>
            <Link href={"https://rzp.io/l/priyangsu"}>Pay</Link>
          </li>
        </ul>
        <div className="h-full flex items-center justify-center">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme == "dark" ? (
              <Icon height={"25"} icon="ph:sun" />
            ) : (
              <Icon height={"25"} icon="ri:moon-fill" />
            )}
          </button>
          <button
            disabled={
              nAirplaneState == "expedite" || nAirplaneState == "touchDown"
            }
            onClick={() => {
              toggleNav();
            }}
            className="ml-6 w-6 h-6 flex text-black dark:text-white items-center justify-center lg:hidden"
          >
            {nAirplaneState == "inAir" ? (
              <Icon height={24} icon="line-md:menu" />
            ) : nAirplaneState == "landed" ? (
              <Icon height={24} icon="ep:close" />
            ) : (
              <div className="h-6 w-6 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </button>
        </div>
      </motion.nav>

      {/* expanded navbar */}

      <section
        id="navmenu"
        className="fixed inset-x-0 top-0 -translate-y-[100%] h-[calc(100%)] w-full bg-white dark:bg-black z-40 transition-transform duration-500 lg:hidden flex flex-col justify-end"
      >
        <div className="h-full flex flex-col w-full relative pt-16">
          <ul
            className={`text-neutral-800 mt-10 font-light text-3xl space-y-9 dark:text-neutral-300 px-6 transition-all duration-500 ${
              nAirplaneState == "landed" || nAirplaneState == "expedite"
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <li
              onClick={() => {
                closeNav("Taking you home", "/#home");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                closeNav("Taking you to my work", "/#work");
              }}
            >
              Work
            </li>
            <li
              onClick={() => {
                closeNav("Taking you to my work", "/#process");
              }}
            >
              Process
            </li>
            <li
              onClick={() => {
                closeNav("Taking you to my work", "/message");
              }}
            >
              Make it happen
            </li>
            <li
              onClick={() => {
                closeNav("Taking you to my work", "https://rzp.io/l/priyangsu");
              }}
            >
              Pay
            </li>
          </ul>
          <div className="w-full mt-16 h-32 border-y border-black/60 dark:border-white/60 relative">
            <div
              id="runwayMarking"
              className="absolute h-full inset-y-0 left-8 flex flex-col justify-evenly"
            >
              <div className="h-5 w-8 bg-black/10 dark:bg-white/20 flex items-center">
                <div className="w-full h-[40%] bg-white dark:bg-black"></div>
              </div>
              <h1 className="font-Bebas-Neue w-fit text-2xl font-bold text-black bg-white dark:bg-black dark:text-white py-1 px-2 z-10 -rotate-90">
                07
              </h1>
              <div className="h-5 w-8 bg-black/10 dark:bg-white/20 flex items-center">
                <div className="w-full h-[40%] bg-white dark:bg-black"></div>
              </div>
              {/* <div className="h-5 w-8 bg-black/10 dark:bg-white/20 z-10 top-4 left-12 absolute flex items-center">
                <div className="w-full h-[40%] bg-white dark:bg-black"></div>
              </div>
              <h1 className="font-Bebas-Neue text-2xl font-bold text-black bg-white dark:bg-black dark:text-white py-1 px-2 z-10 -rotate-90 top-1/2 -translate-y-1/2 left-12 absolute">
                07
              </h1>
              <div className="h-5 w-8 z-10 bg-black/10 dark:bg-white/20 bottom-4 left-12 absolute flex items-center">
                <div className="w-full h-[40%] bg-white dark:bg-black"></div>
              </div> */}
            </div>
            <button
              id="plane2"
              className="rotate-90 absolute top-[29.5%] text-black dark:text-white z-20 -left-[30%]"
            >
              <Icon height={50} icon="ri:plane-fill" />
            </button>

            <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center">
              <Marquee
                play={
                  nAirplaneState == "landed" || nAirplaneState == "expedite"
                }
              >
                {Array(50)
                  .fill()
                  .map((_, i) => (
                    <div
                      className="w-6 h-1 mr-6 dark:bg-white/50 bg-black/50"
                      key={i}
                    ></div>
                  ))}
              </Marquee>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <span className="text-xs uppercase tracking-wider">{nStatus}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
