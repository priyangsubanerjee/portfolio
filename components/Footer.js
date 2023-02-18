/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import routes from "@/static/routes";

function Footer() {
  const router = useRouter();

  return (
    <div>
      <footer className="mt-32">
        <div className="border-t border-darkPrimary">
          <div className="px-5 lg:px-16 pt-8 lg:pt-12 pb-16 flex flex-col lg:flex-row items-center justify-between">
            <ul className="flex text-slate-400 text-sm flex-wrap items-center">
              {routes.map((item, i) => {
                return (
                  <Link href={item.path} key={i}>
                    <li
                      className={`mr-5 mt-2 lg:mt-2 cursor-pointer ${
                        router.pathname == item.path
                          ? "text-sky-300"
                          : "hover:text-slate-200"
                      } transition-all`}
                    >
                      {item.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
            <span className="text-slate-500 text-xs mt-5 lg:mt-0">
              © 2022 Priyangsu Banerjee. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
