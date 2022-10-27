import React from "react";

function SecondaryArticle() {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-100">
          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="#">
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">
              October summit on System design.
            </span>
          </a>
        </h2>
        <time
          className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 pl-3.5"
          datetime="2022-09-05"
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-500"></span>
          </span>
          September 5, 2022
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-400">
          System design is important for defining the product and its
          architecture. It is necessary for the interfaces, design, data, and
          modules to satisfy the system requirements. Thus, a good system design
          strategy is key for enabling optimal product development.
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
        >
          Read article
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <time
        className="mt-1 hidden md:block relative z-10 order-first mb-3 lg:flex items-center text-sm text-zinc-500"
        datetime="2022-09-05"
      >
        September 5, 2022
      </time>
    </article>
  );
}

export default SecondaryArticle;
