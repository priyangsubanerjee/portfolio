import routes from "@/static/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { Fade } from "react-reveal";

function Expanded() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
  }, [router]);

  return (
    <div className="flex lg:hidden mr-3">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center bg-darkPrimary px-5 py-3 rounded-full border border-darkPrimary"
      >
        <span className="text-sm font-medium text-zinc-100">Menu</span>
        <i class="bi bi-chevron-down text-zinc-100 text-xs ml-2"></i>
      </button>
      <Fade when={open} duration={500}>
        {open && (
          <div className="fixed h-full w-full z-40 inset-0 bg-black/20 backdrop-blur-sm flex p-5 flex-col">
            <div className="h-fit w-full bg-darkSecondary border border-slate-600 rounded-3xl shrink-0">
              <div className="flex py-4 px-6">
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center h-10 w-10 bg-slate-800 rounded-full ml-auto"
                >
                  <i class="bi bi-x-lg text-sm text-white"></i>
                </button>
              </div>
              <div className="px-6 pb-7">
                <p className="text-slate-200 font-medium text-2xl">Menu</p>
                <ul className="text-slate-400 space-y-4 mt-6">
                  {routes.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href={item.path} key={i}>
                          <div
                            className={`mr-5 cursor-pointer ${
                              router.pathname == item.path
                                ? "text-sky-300"
                                : "hover:text-slate-200"
                            } transition-all`}
                          >
                            {item.title}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div onClick={() => setOpen(false)} className="w-full h-full"></div>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default Expanded;
