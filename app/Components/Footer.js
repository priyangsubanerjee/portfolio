"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-20 mb-10 border-t dark:border-t-white/30 border-t-black/30 max-w-7xl mx-auto px-6 lg:px-10">
      <div className="w-full">
        <div className="lg:flex space-y-10 lg:space-y-0 items-center justify-between mt-10">
          <span className="text-sm">
            ©2024 All Rights Reserved. Design & Coded with ❤️️
          </span>
          <ul className="lg:flex space-y-3 lg:space-y-0 items-center lg:first-letter:space-x-8 text-sm">
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
  );
}

export default Footer;
