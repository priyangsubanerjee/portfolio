/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Gallery from "../components/Gallery";
import PrimaryArticle from "../components/PrimaryArticle";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Priyangsu Banerjee - Full stack developer</title>
      </Head>
      <div className="px-5 mt-5 lg:mt-7">
        <div className="space-y-5  lg:px-32 lg:w-[70%]">
          <div className="h-16 lg:h-24 w-16 lg:w-24 rounded-full flex items-center justify-center overflow-hidden">
            <img src="/logo.jpeg" alt="" />
          </div>
          <div className="space-y-4 lg:space-y-5">
            <h1 className="text-zinc-100 font-bold text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.3]">
              Full stack developer, designer, and founder.
            </h1>
            <p className="text-sm text-zinc-400 leading-6 lg:leading-7">
              I&apos;m Priyangsu, a software developer and entrepreneur based in
              India. I&apos;m currently building VBC, where we develop
              technologies that empower regular people to explore tech on their
              own terms.
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
        <div className="space-y-6">
          <PrimaryArticle />
        </div>
        <div className=" space-y-8">
          <form
            action="/thank-you"
            className="rounded-2xl border p-6 border-zinc-700/40 h-fit"
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
              <span className="ml-3">Wanna discuss something?</span>
            </h2>
            <p className="mt-2 text-xs leading-5 text-zinc-400">
              I will get back to you as soon as possible.
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
                Send
              </button>
            </div>
          </form>
          <form
            action="/thank-you"
            className="rounded-2xl border p-6 border-zinc-700/40 h-fit"
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
                  <div className="h-10 w-10 rounded-full">
                    <img
                      src="https://easyfidb.herokuapp.com/download/9926904c-d50b-49be-8736-01719ee55b87.png"
                      className="h-ful w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-zinc-300 text-sm font-semibold">
                    Robotics, IOT development
                  </p>
                  <small className="text-xs text-zinc-500">
                    5+ years of expertise
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
