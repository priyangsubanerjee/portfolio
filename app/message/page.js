"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function Message() {
  return (
    <div>
      <div className="py-12">
        <h1 className="text-3xl font-semibold text-center">Get in touch</h1>
        <p className="text-center text-sm mt-3 text-neutral-600 dark:text-neutral-400">
          Exploring out for a new project? or just want to say hi ?
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-2 gap-3">
          <div
            onClick={() => document.getElementById("name-input").focus()}
            className="pt-2 group rounded-lg overflow-hidden bg-neutral-100 focus-within:bg-neutral-200/70 transition-all"
          >
            <label
              className="block px-4 group-focus-within:text-neutral-800 text-sm text-neutral-500 transition-all"
              htmlFor=""
            >
              Your name
            </label>
            <input
              className="block px-4 pb-2 pt-1 w-full h-10 bg-transparent outline-none"
              type="text"
              placeholder="John Doe"
              name=""
              id="name-input"
            />
          </div>
          <div
            onClick={() => document.getElementById("email-input").focus()}
            className="pt-2 group rounded-lg overflow-hidden bg-neutral-100 focus-within:bg-neutral-200/70 transition-all"
          >
            <label
              className="block px-4 group-focus-within:text-neutral-800 text-sm text-neutral-500 transition-all"
              htmlFor=""
            >
              Your email
            </label>
            <input
              className="block px-4 pb-2 pt-1 w-full h-10 bg-transparent outline-none"
              type="text"
              placeholder="hello@example.com"
              name=""
              id="email-input"
            />
          </div>
          <div
            onClick={() => document.getElementById("message-input").focus()}
            className="p-4 group rounded-lg overflow-hidden bg-neutral-100 focus-within:bg-neutral-200/70 transition-all col-span-2"
          >
            <label
              className="block group-focus-within:text-neutral-800 text-sm text-neutral-500 transition-all"
              htmlFor=""
            >
              Your message
            </label>
            <textarea
              className="block bg-transparent mt-2 w-full resize-none outline-none"
              name=""
              placeholder="I would like to discuss a project with you ..."
              id="message-input"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <span className="text-sm text-neutral-600">
            I&apos;ll get back to you within 24 hours..!
          </span>
          <Button className="bg-neutral-800 text-neutral-200 h-12 w-fit px-5">
            <span>Send message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"
              ></path>
            </svg>
          </Button>
        </div>
        <div className="mt-32">
          <h2 className="text-sm px-5 text-neutral-600 font text-center w-fit mx-auto border-b pb-5">
            Some other ways to get in touch{" "}
            <span className="text-xl translate-y-[2px] inline-block">🤝</span>
          </h2>
          <div className="flex mt-5 gap-3 items-center justify-center text-neutral-800">
            <ul className="flex items-center justify-center flex-wrap gap-5 text-sm text-neutral-900 dark:text-neutral-300">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
