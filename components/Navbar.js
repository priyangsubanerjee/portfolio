import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  useEffect(() => {
    if (navbarExpanded) {
      document.getElementById("navmenu").style.transform = "translateY(0%)";
      gsap.fromTo(
        "#plane2",
        {
          left: "-30%",
        },
        {
          duration: 4,
          delay: 0.5,
          left: "60%",
        }
      );
    } else {
      gsap
        .to("#plane2", {
          duration: 2,
          left: "100%",
        })
        .then(() => {
          document.getElementById("navmenu").style.transform =
            "translateY(-100%)";
        });
    }
  }, [navbarExpanded]);
  return (
    <>
      <nav className="px-6 bg-white dark:bg-black lg:px-16 shrink-0 h-16 lg:h-24 flex items-center justify-between relative z-50">
        <div>
          <h1 className="font-semibold text-xl lg:text-2xl text-neutral-950 dark:text-slate-100">
            Priyangsu <span className="text-neutral-500">Banerjee.</span>
          </h1>
        </div>
        <ul className="hidden text-neutral-700 dark:text-neutral-300 lg:flex items-center justify-center space-x-9 absolute left-1/2 -translate-x-1/2">
          <li>Home</li>
          <li>Work</li>
          <li>Process</li>
          <li>Make it happen</li>
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
            onClick={() => {
              setNavbarExpanded(!navbarExpanded);
            }}
            className="ml-6 lg:hidden"
          >
            <Icon height={24} icon="line-md:menu" />
          </button>
        </div>
      </nav>
      <div
        id="navmenu"
        className="fixed inset-x-0 bottom-0 -translate-y-full h-[calc(100%-64px)] w-full bg-white dark:bg-black z-40 transition-transform duration-500 flex flex-col justify-end"
      >
        <div className="h-full flex flex-col w-full relative">
          <ul className="text-neutral-800 mt-16 font-light text-3xl space-y-9 dark:text-neutral-300 px-6">
            <li>Home</li>
            <li>Work</li>
            <li>Process</li>
            <li>Make it happen</li>
          </ul>
          <div className="w-full mt-16 h-32 border-y border-black/60 dark:border-white/60 relative">
            <div className="h-5 w-8 bg-black/10 dark:bg-white/20 top-4 left-12 absolute"></div>
            <h1 className="font-Bebas-Neue text-2xl font-bold text-black bg-white dark:bg-black dark:text-white py-1 px-2 z-20 -rotate-90 top-1/2 -translate-y-1/2 left-12 absolute">
              07
            </h1>
            <button
              id="plane2"
              className="rotate-90 absolute top-[29.5%] text-black dark:text-white z-20 -left-[30%]"
            >
              <Icon height={50} icon="ri:plane-fill" />
            </button>
            <div className=" w-full border-t-4 border-dashed border-black/30 dark:border-white/30 absolute top-1/2 -translate-y-1/2"></div>
            <div className="h-5 w-8 bg-black/10 dark:bg-white/20 bottom-4 left-12 absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
