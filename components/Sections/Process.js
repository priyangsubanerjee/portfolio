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
        {/* <div className="py-6 border-b border-neutral-400 dark:border-neutral-700">
          <div className="flex items-center text-xl font-light">
            <span>01.</span>
            <span className="ml-4">UX / Wireframing</span>
            <button className="ml-auto">+</button>
          </div>
        </div>
        <div className="py-6 border-b border-neutral-400 dark:border-neutral-700">
          <div className="flex items-center text-xl font-light">
            <span>02.</span>
            <span className="ml-4">Web Design</span>
            <button className="ml-auto">+</button>
          </div>
        </div>
        <div className="py-6 border-b border-neutral-400 dark:border-neutral-700">
          <div className="flex items-center text-xl font-light">
            <span>03.</span>
            <span className="ml-4">Web Development</span>
            <button className="ml-auto">+</button>
          </div>
        </div>
        <div className="py-6 border-b border-neutral-400 dark:border-neutral-700">
          <div className="flex items-center text-xl font-light">
            <span>04.</span>
            <span className="ml-4">Web Analytics & Support</span>
            <button className="ml-auto">+</button>
          </div>
        </div> */}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={
              <div className="flex items-center text-xl font-light py-2">
                <span>02.</span>
                <span className="ml-4">Web Design</span>
              </div>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title={
              <div className="flex items-center text-xl font-light py-2">
                <span>03.</span>
                <span className="ml-4">Web Development</span>
              </div>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Process;
