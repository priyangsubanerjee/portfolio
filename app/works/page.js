"use client";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/static/projects";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Works() {
  const [triggerOn, setTriggerOn] = useState(false);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setTriggerOn(true);
  //     }, 2000);
  //   }, []);

  return (
    <div>
      <div className="py-12">
        <h1 className="text-3xl font-semibold text-center">
          <span>Pro</span>
          jects
        </h1>
        <p className="text-center text-sm mt-3 text-neutral-600 dark:text-neutral-400">
          Explore the endeavors that keep my spirit thriving.
        </p>
      </div>

      {/* <div className="px-16 mt-12 grid grid-cols-2 gap-8">
        <div className="hover:bg-white/5 transition-all p-6">
          <h1 className="text-2xl font-medium">Animalize LMS</h1>
          <div className="flex items-center text-xs gap-4 text-neutral-400 mt-3">
            <span>March 2023</span>
          </div>
          <p className="mt-4 text-sm text-neutral-300 leading-6">
            A short description of the tool and how it can be used to solve a
            problem.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <Button className="rounded-full text-sm bg-white text-black border border-neutral-700">
              Open
            </Button>
            <Button isIconOnly className="bg-transparent rounded-full">
              <Icon
                height={"25"}
                className="text-neutral-200"
                icon="iconoir:github"
              />
            </Button>
          </div>
        </div>
        <div className="hover:bg-white/5 transition-all p-6">
          <h1 className="text-xl font-medium">Animalize LMS</h1>
          <div className="flex items-center text-xs gap-4 text-neutral-400 mt-3">
            <span>March 2023</span>
          </div>
          <p className="mt-4 text-sm text-neutral-300 leading-6">
            A short description of the tool and how it can be used to solve a
            problem.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <Button className="rounded-full text-sm bg-white text-black border border-neutral-700">
              Open
            </Button>
            <Button isIconOnly className="bg-transparent rounded-full">
              <Icon
                height={"25"}
                className="text-neutral-200"
                icon="iconoir:github"
              />
            </Button>
          </div>
        </div>
      </div> */}

      {/* <div className="px-24 grid grid-cols-3 gap-6 mt-16">
        <div className="hover:bg-white/5 transition-all p-6">
          <h1 className="text-2xl tracking-wide">Animalize LMS</h1>
          <div className="flex items-center text-xs gap-4 text-neutral-400 mt-3">
            <span>March 2023</span>
          </div>
          <p className="mt-4 text-sm text-neutral-300 leading-7 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            deserunt quia fuga sapiente, pariatur perspiciatis, aliquam
            laudantium nam cupiditate, recusandae eveniet enim nesciunt adipisci
            atque iste in? Iure, nostrum quasi.
          </p>
          <div className="mt-7 flex items-center gap-4">
            <Button className="rounded-full text-sm bg-white text-black border border-neutral-700">
              Open
            </Button>
            <Button isIconOnly className="bg-transparent rounded-full">
              <Icon
                height={"25"}
                className="text-neutral-200"
                icon="iconoir:github"
              />
            </Button>
          </div>
        </div>
      </div> */}

      <div className="px-24 mt-10">
        <Accordion defaultExpandedKeys={["1"]} selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={
              <p className="dark:text-white/50 text-black/80 leading-[1] text-[40px]">
                .24
              </p>
            }
          >
            <div className="pb-10">
              <ul className="grid grid-cols-2 mt-2 px-10 gap-10 border-l pl-20 max-w-5xl ml-10 border-neutral-300 dark:border-neutral-700">
                <li>
                  <h2>Project name</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-6 mt-2">
                    A short description of the tool and how it can be used to
                    solve a problem.
                  </p>
                  <button className="flex mt-4 items-center space-x-2 uppercase text-xs tracking-wider font-medium hover:underline text-neutral-500 dark:text-neutral-200">
                    <span>Preview</span>
                    <Icon icon="ion:open-outline" />
                  </button>
                </li>
                <li>
                  <h2>Project name</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-6 mt-2">
                    A short description of the tool and how it can be used to
                    solve a problem.
                  </p>
                </li>
                <li>
                  <h2>Project name</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-6 mt-2">
                    A short description of the tool and how it can be used to
                    solve a problem.
                  </p>
                </li>
                <li>
                  <h2>Project name</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-6 mt-2">
                    A short description of the tool and how it can be used to
                    solve a problem.
                  </p>
                </li>
              </ul>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={
              <p className="dark:text-white/50 text-black/80 leading-[1] text-[40px]">
                .22
              </p>
            }
          >
            <div className="pb-10">
              <ul className="grid grid-cols-2 mt-2 px-10 gap-10 border-l pl-20 max-w-5xl ml-10 border-neutral-300 dark:border-neutral-700">
                <li>
                  <h2>Project name</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-6 mt-2">
                    A short description of the tool and how it can be used to
                    solve a problem.
                  </p>
                  <button className="flex mt-4 items-center space-x-2 uppercase text-xs tracking-wider font-medium hover:underline text-neutral-500 dark:text-neutral-200">
                    <span>Preview</span>
                    <Icon icon="ion:open-outline" />
                  </button>
                </li>
                <li>
                  <h2>Project name</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-6 mt-2">
                    A short description of the tool and how it can be used to
                    solve a problem.
                  </p>
                </li>
                <li>
                  <h2>Project name</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-6 mt-2">
                    A short description of the tool and how it can be used to
                    solve a problem.
                  </p>
                </li>
                <li>
                  <h2>Project name</h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-6 mt-2">
                    A short description of the tool and how it can be used to
                    solve a problem.
                  </p>
                </li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Works;
