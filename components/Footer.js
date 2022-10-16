/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import menu from "../static/navMenu";

function Footer() {
  return (
    <div>
      <footer class="mt-32">
        <div class="border-t border-zinc-700">
          <div class="px-5 lg:px-16 pt-8 lg:pt-12 pb-16 flex flex-col lg:flex-row items-center justify-between">
            <ul className="flex text-zinc-300 text-sm flex-wrap items-center">
              {menu.map((item, i) => {
                return (
                  <li className="mr-5 mt-2 lg:mt-2" key={i}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
            <span className="text-zinc-500 text-xs mt-5 lg:mt-0">
              © 2022 Priyangsu Banerjee. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
