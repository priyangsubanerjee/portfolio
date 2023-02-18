import socialLinks from "@/static/socialLinks";
import Link from "next/link";
import React from "react";

function Socials({ className }) {
  return (
    <ul className={`${className} flex items-center space-x-6 text-xl`}>
      {socialLinks.map((link, i) => {
        return (
          <li title={link.name} key={i}>
            <Link href="/">
              <i
                className={`${link.icon} text-slate-400 hover:text-white transition-all duration-300`}
              ></i>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Socials;
