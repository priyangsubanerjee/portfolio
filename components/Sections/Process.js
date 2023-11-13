import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Process() {
  return (
    <div className="mt-60 px-6 lg:px-16 grid grid-cols-1 gap-7 lg:grid-cols-2">
      <div className="lg:pr-16">
        <h1 className="text-4xl lg:text-6xl font-light leading-[1.4] lg:leading-[1.2]">
          My way of getting <br /> things done
        </h1>
        <p className="leading-8 mt-10">
          Fast and transparent, the path to owning a website that will represent
          your brand in the best of light is only 4 weeks away. Standing by the
          Waterfall methodology, I assure a step by step completion of the whole
          process.
        </p>
      </div>
      <div className="lg:pl-16">
        <Accordion isCompact={false}>
          <AccordionItem
            key="1"
            aria-label="01. UX / Wireframing"
            title={
              <div className="flex items-center text-xl font-light py-2">
                <span>01.</span>
                <span className="ml-4">UX / Wireframing</span>
              </div>
            }
          >
            <p className="pb-4 text-sm leading-7 text-neutral-700 dark:text-neutral-400 -mt-2">
              One of the most important steps in the process of creating a
              website / mobile application is understanding the needs of the
              client and the end user. This is the first step in the process of
              creating a website / mobile application, and it is very important
              to get it right.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={
              <div className="flex items-center text-xl font-light py-2">
                <span>02.</span>
                <span className="ml-4">Design</span>
              </div>
            }
          >
            <p className="pb-4 text-sm leading-7 text-neutral-700 dark:text-neutral-400 -mt-2">
              Then comes the actual visual representation of the website /
              mobile application. This is the part where I take the wireframes
              and turn them into a beautiful and functional website / mobile
              application.
            </p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title={
              <div className="flex items-center text-xl font-light py-2">
                <span>03.</span>
                <span className="ml-4">Development</span>
              </div>
            }
          >
            <p className="pb-4 text-sm leading-7 text-neutral-700 dark:text-neutral-400 -mt-2">
              The final step in the process is the development of the website /
              mobile application. This is the part where I choose the
              appropriate framework and start building the product from the
              ground up.
            </p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title={
              <div className="flex items-center text-xl font-light">
                <span>04.</span>
                <span className="ml-4">Web Analytics & Support</span>
              </div>
            }
          >
            <p className="pb-4 text-sm leading-7 dark:text-neutral-400 -mt-2">
              Even after the website / mobile application is finished, someone
              can still opt in for a monthly support plan. This includes website
              / mobile application maintenance, SEO, and web analytics.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Process;
