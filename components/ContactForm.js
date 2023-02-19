import axios from "axios";
import React, { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await axios.post(
            "https://remitapi.vercel.app/send/clead0agx2onc0a1hl7ia4j1p",
            JSON.stringify({
              to: "priyangsu26@gmail.com",
              subject: "Some one wants to connect.",
              html: `<p>Hey, reply me at ${email}</p>
              <p>Thanks</p>`,
            }),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (res.status === 200) {
            setEmail("");
          }
        }}
        class="rounded-2xl border p-6 border-slate-700/40 h-fit"
      >
        <h2 class="flex text-sm font-semibold text-zinc-100">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="h-6 w-6 flex-none"
          >
            <path
              d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
              class="fill-slate-100/10 stroke-slate-500"
            ></path>
            <path
              d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
              class="stroke-slate-500"
            ></path>
          </svg>
          <span class="ml-3">Wanna discuss something?</span>
        </h2>
        <p class="mt-2 text-xs leading-5 text-slate-400">
          I will get back to you as soon as possible.
        </p>
        <div class="mt-6 flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            class="min-w-0 flex-auto text-white appearance-none rounded-md border px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-slate-800/5 focus:outline-none focus:ring-4 border-slate-700 bg-slate-700/[0.15] placeholder:text-slate-500 focus:border-sky-300 focus:ring-sky-300/10 sm:text-sm"
          />
          <button
            class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none font-semibold text-slate-100 bg-slate-700 hover:bg-slate-600 active:bg-slate-700 active:text-slate-100/70 ml-4 flex-none"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
