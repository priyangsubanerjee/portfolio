import React from "react";

function Speaking() {
  return (
    <div className="space-y-16">
      <div className="w-[60%] space-y-4">
        <h1 className="text-4xl font-bold leading-[1.4] text-gray-700">
          I&apos;ve spoken at events all around the world and been interviewed
          for many podcasts.
        </h1>
        <p className="text-gray-500 leading-7 text-sm">
          One of my favorite ways to share my ideas is live on stage, where
          there&apos;s so much more communication bandwidth than there is in
          writing, and I love podcast interviews because they give me the
          opportunity to answer questions instead of just present my opinions.
        </p>
      </div>
      <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="flex max-w-3xl flex-col space-y-16">
          <p class="text-sm p-4 bg-gray-50 text-gray-600 w-fit rounded-md flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <span>No upcoming events scheduled.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Speaking;
