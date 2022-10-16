/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Gallery from "../components/Gallery";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div>
      <div className="px-5 mt-5 lg:mt-7">
        <div className="space-y-5  lg:px-32 lg:w-[70%]">
          <div className="h-16 lg:h-24 w-16 lg:w-24 rounded-full flex items-center justify-center overflow-hidden">
            <img src="/logo.jpeg" alt="" />
          </div>
          <div className="space-y-4 lg:space-y-5">
            <h1 className="text-zinc-100 font-bold text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.3]">
              Software designer, founder, and amateur astronaut.
            </h1>
            <p className="text-sm text-zinc-400 leading-6 lg:leading-7">
              I&apos;m Spencer, a software designer and entrepreneur based in
              New York City. I&apos;m the founder and CEO of Planetaria, where
              we develop technologies that empower regular people to explore
              space on their own terms.
            </p>
            <div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Gallery />
      </div>
      <div className="px-5 lg:px-32 mt-16 lg:mt-20 grid lg:grid-cols-2 gap-16">
        <div className="grid grid-cols-1 gap-y-16">
          <article className="group relative flex flex-col items-start">
            <h2 className="text-base font-semibold tracking-tight text-zinc-200 dark:text-zinc-100">
              <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-800/90 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
              <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative z-10">
                  Crafting a design system for a multiplanetary future
                </span>
              </a>
            </h2>
            <time
              className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
              datetime="2022-09-05"
            >
              <span
                className="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-500"></span>
              </span>
              September 5, 2022
            </time>
            <p className="relative z-10 mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Most companies try to stay ahead of the curve when it comes to
              visual design, but for Planetaria we needed to create a brand that
              would still inspire us 100 years from now when humanity has spread
              across our entire solar system.
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
          </article>
          <article className="group relative flex flex-col items-start">
            <h2 className="text-base font-semibold tracking-tight text-zinc-200 dark:text-zinc-100">
              <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-800/90 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
              <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative z-10">
                  Crafting a design system for a multiplanetary future
                </span>
              </a>
            </h2>
            <time
              className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
              datetime="2022-09-05"
            >
              <span
                className="absolute inset-y-0 left-0 flex items-center"
                aria-hidden="true"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-500"></span>
              </span>
              September 5, 2022
            </time>
            <p className="relative z-10 mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Most companies try to stay ahead of the curve when it comes to
              visual design, but for Planetaria we needed to create a brand that
              would still inspire us 100 years from now when humanity has spread
              across our entire solar system.
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
          </article>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <form
            action="/thank-you"
            className="rounded-2xl border p-6 border-zinc-700/40"
          >
            <h2 className="flex text-sm font-semibold text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="h-6 w-6 flex-none"
              >
                <path
                  d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100/10 stroke-zinc-500"
                ></path>
                <path
                  d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                  className="stroke-zinc-500"
                ></path>
              </svg>
              <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-xs leading-5 text-zinc-400">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                required=""
                className="min-w-0 flex-auto appearance-none rounded-md border px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] dark:text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:ring-teal-400/10 sm:text-sm"
              />
              <button
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-semibold text-zinc-100 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-700 active:text-zinc-100/70 ml-4 flex-none"
                type="submit"
              >
                Join
              </button>
            </div>
          </form>
          <form
            action="/thank-you"
            className="rounded-2xl border p-6 border-zinc-700/40"
          >
            <h2 className="flex text-sm font-semibold text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="h-6 w-6 flex-none"
              >
                <path
                  d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100/10 stroke-zinc-500"
                ></path>
                <path
                  d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                  className="stroke-zinc-500"
                ></path>
              </svg>
              <span className="ml-3">Experience</span>
            </h2>
            <ul className="mt-6 space-y-6">
              <li className="flex items-center">
                <div className="h-12 w-12 rounded-full border border-zinc-700 bg-zinc-700/80 flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579"
                      className="h-ful w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-zinc-300 text-sm font-semibold">
                    Full stack web development
                  </p>
                  <small className="text-xs text-zinc-500">
                    7+ years of expertise
                  </small>
                </div>
              </li>
              <li className="flex items-center">
                <div className="h-12 w-12 rounded-full border border-zinc-700 bg-zinc-700/80 flex items-center justify-center">
                  <div className="h-9 w-9 rounded-full overflow-hidden">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Android_11_Developer_Preview_logo.svg/2048px-Android_11_Developer_Preview_logo.svg.png"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-zinc-300 text-sm font-semibold">
                    Android development
                  </p>
                  <small className="text-xs text-zinc-500">
                    3+ years of expertise
                  </small>
                </div>
              </li>
              <li className="flex items-center">
                <div className="h-12 w-12 rounded-full border border-zinc-700 bg-zinc-700/80 flex items-center justify-center">
                  <div className="h-9 w-9 rounded-full overflow-hidden">
                    <img
                      src="https://images.ctfassets.net/ooa29xqb8tix/6MFFWO1k38yxTrLKRZ26e8/2c07fa6c2c4653bfae00dd87625d6e56/swift-logo.png?w=400&q=50"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-zinc-300 text-sm font-semibold">
                    iOS &amp; iPadOs development
                  </p>
                  <small className="text-xs text-zinc-500">
                    2+ years of expertise
                  </small>
                </div>
              </li>
              <li className="flex items-center">
                <div className="h-12 w-12 rounded-full border border-zinc-700 bg-zinc-700/80 flex items-center justify-center">
                  <div className="h-9 w-9 rounded-full overflow-hidden">
                    <img
                      src="https://ih1.redbubble.net/image.1060800409.1512/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-zinc-300 text-sm font-semibold">
                    Hybrid &amp; cross platform development
                  </p>
                  <small className="text-xs text-zinc-500">
                    2+ years of expertise
                  </small>
                </div>
              </li>
              <a
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                href="/#"
              >
                Download CV
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4 stroke-zinc-400 transition group-hover:stroke-zinc-50 group-active:stroke-zinc-50"
                >
                  <path
                    d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
