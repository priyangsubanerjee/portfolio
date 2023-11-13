import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

function Rate() {
  const [rate, setRate] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let shownSession = sessionStorage.getItem("shown") || false;
    let shown = localStorage.getItem("shown") || false;
    if (!shown) {
      if (!shownSession) {
        setTimeout(() => {
          setVisible(true);
        }, 15000);
      }
    }
  }, [visible]);

  const submitRate = async () => {
    setLoading(true);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ rate }),
    });
    setLoading(false);
    setSubmitted(true);
    setVisible(false);
    localStorage.setItem("shown", true);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/50 z-50 flex items-end"
          >
            <div className="bg-white w-full px-8 py-8 pb-8 relative">
              <div className="flex items-center justify-between">
                <button
                  className="text-sm text-neutral-500 font-medium"
                  onClick={() => {
                    setVisible(false);
                    sessionStorage.setItem("shown", true);
                  }}
                >
                  Remind me later?
                </button>
                <button
                  onClick={() => {
                    setVisible(false);
                    localStorage.setItem("shown", true);
                  }}
                  className=""
                >
                  <Icon icon="ion:close-outline" height={24} />
                </button>
              </div>
              <h1 className="text-left font-Bebas-Neue mt-8 text-4xl text-neutral-800 font-medium tracking-wider">
                The{" "}
                <span className="text-red-500 tracking-normal">15&apos;s</span>{" "}
                principle
              </h1>
              <p className="text-sm text-neutral-700 leading-6 mt-3">
                Over the passing years, I have learned that the first 15 seconds
                of a website visit are the most important. If the user does not
                find what he is looking for in the first 15 seconds, he/she will
                leave the website.
              </p>
              <p className="text-sm font-medium text-neutral-900 mt-6 leading-6">
                Since you&apos;ve spent more than 15 seconds on my website, what
                would you rate it out of 10?
              </p>

              <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                  return (
                    <div
                      onClick={() => setRate(item)}
                      style={{
                        backgroundColor: rate == item ? "#000" : "#fff",
                        color: rate == item ? "#fff" : "#000",
                      }}
                      className="flex items-center justify-center w-10 h-10 border border-black/30 rounded-full cursor-pointer hover:bg-black/10 shrink-0"
                      key={index}
                    >
                      <span className="text-base">{item}</span>
                    </div>
                  );
                })}
              </div>

              <Button
                isLoading={loading}
                onPress={() => {
                  submitRate();
                }}
                isDisabled={rate == 0}
                className="h-14 mt-10 bg-red-500 text-white text-base font-semibold w-full flex items-center justify-center rounded-lg"
              >
                Submit report
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Rate;
