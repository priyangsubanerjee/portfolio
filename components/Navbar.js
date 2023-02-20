import routes from "@/static/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CofeeButton from "./CofeeButton";
import Expanded from "./Expanded";

function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-5 inset-x-0 block z-30">
      <div className="w-full flex items-center justify-end lg:justify-between px-5 lg:px-20">
        <div></div>
        <ul className="h-10 hidden bg-darkPrimary text-zinc-400 text-sm rounded-full border border-darkPrimary lg:flex items-center space-x-2 px-6">
          {routes.map((route, index) => {
            return (
              <Link href={route.path} key={index} className="h-full">
                <li className="flex flex-col items-center justify-center h-full relative">
                  <span
                    className={`px-4 transition-all duration-500 ${
                      router.pathname == route.match
                        ? "text-sky-300"
                        : router.pathname.split("/")[1] ==
                          route.path.split("/")[1]
                        ? "text-sky-300"
                        : "text-slate-400"
                    }`}
                  >
                    {route.title}
                  </span>
                  <div
                    className={`absolute -bottom-[1px] via-sky-300 bg-gradient-to-r from-transparent transition-all duration-500 ${
                      router.pathname == route.path
                        ? "opacity-100"
                        : router.pathname.split("/")[1] ==
                          route.path.split("/")[1]
                        ? "opacity-100"
                        : "opacity-0"
                    } to-transparent w-full h-[1px]`}
                  ></div>
                </li>
              </Link>
            );
          })}
        </ul>
        <Expanded />
        <CofeeButton />
      </div>
    </nav>
  );
}

export default Navbar;
