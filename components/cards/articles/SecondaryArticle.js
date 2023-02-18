import Link from "next/link";
import React from "react";

function SecondaryArticle({ article }) {
  return (
    <Link href={`/articles/${article.slug}`} target={"_blank"}>
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <div className="md:col-span-3 group relative flex flex-col items-start">
          <h2 className="text-base font-semibold tracking-tight text-zinc-100">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-darkPrimary opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
            <span>
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{article.heading}</span>
            </span>
          </h2>
          <time
            className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-slate-500 pl-3.5"
            datetime="2022-09-05"
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-slate-500"></span>
            </span>
            <span>{new Date(article.createdAt).toDateString()}</span>
          </time>
          <p className="relative z-10 mt-2 text-sm text-slate-400 leading-7">
            {article.description.substring(0, 200) + "..."}
          </p>
          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-sky-300"
          >
            Read article
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current group-hover:translate-x-1 transition-all"
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
          className="mt-1 hidden md:block relative z-10 order-first mb-3 lg:flex items-center text-sm text-slate-500"
          datetime="2022-09-05"
        >
          <span>{new Date(article.createdAt).toDateString()}</span>
        </time>
      </article>
    </Link>
  );
}

export default SecondaryArticle;
