/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function FeaturedArticles({ className }) {
  return (
    <div className={`${className} w-full`}>
      <div className="flex items-center px-7 lg:px-0">
        <i class="bi bi-calendar-range text-2xl text-white mr-4"></i>
        <h1 className="text-xl font-bold text-white">Upcoming events</h1>
      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-2 space-x-10 mt-10 px-5`}>
        <div className="flex items-center rounded-lg bg-darkPrimary border border-darkPrimary p-5 hover:shadow-xl hover:shadow-sky-300/10 transition-all">
          <div className="flex flex-col items-center space-y-2 border-r border-darkPrimary pr-5 shrink-0">
            <h1 className="text-4xl font-bold text-sky-300">23</h1>
            <h2 className="text-zinc-300 text-sm">June, 2023</h2>
          </div>
          <div className="ml-5">
            <h1 className="text-xl font-bold text-white">
              Introduction to Tailwind Css
            </h1>
            <p className="text-slate-300 text-xs mt-2 leading-6">
              1 hour workshop on switching to Tailwind CSS over Vanilla css, and
              a brief introduction to the framework.
            </p>
            <div className="flex mt-5">
              <button className="border group w-full border-darkPrimary text-zinc-300 hover:bg-sky-400 active:bg-sky-500 hover:text-black px-3 py-3 rounded-lg text-sm ml-auto flex items-center justify-center space-x-2 transition-all duration-700">
                <span>Register now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticles;
