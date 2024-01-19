/* eslint-disable @next/next/no-img-element */
import { projects } from "@/static/projects";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Works() {
  return (
    <div id="work" className="pt-32 lg:pt-16 lg:mt-32 px-6 lg:px-16 pb-10">
      <h2 className="text-2xl lg:text-3xl font-poppins">Recent works ...</h2>
      <div className="mt-16">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
            key={i}
            className="py-10 border-b border-neutral-400 dark:border-neutral-700 flex group relative"
          >
            <div className="lg:ml-20 transition-all duration-1000">
              <h1 className="text-3xl lg:text-5xl">{project.title}</h1>
              <p className="text-sm max-w-2xl leading-7 text-neutral-600 dark:text-neutral-300 mt-5">
                {project.description}
              </p>
              <div className="mt-6 flex items-center space-x-9">
                {project.preview && (
                  <Link href={project.preview}>
                    <button className="flex items-center space-x-2 uppercase text-sm tracking-wider font-medium hover:underline text-neutral-500 dark:text-neutral-200">
                      <span>Preview</span>
                      <Icon icon="ion:open-outline" />
                    </button>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <button className="flex items-center space-x-2 uppercase text-sm tracking-wider font-medium hover:underline text-neutral-500 dark:text-neutral-200">
                      <span>Github</span>
                      <Icon icon="ion:open-outline" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className="ml-auto whitespace-nowrap shrink-0">
              <h1 className="text-2xl lg:text-4xl dark:text-white font-thin">
                / {project.year}
              </h1>
            </div>
          </motion.div>
        ))}

        <div className="mt-16 lg:pl-20 flex items-center">
          <Link href="/projects">
            <button className="flex group relative w-48 items-center justify-between rounded-full h-12 text-white dark:text-black dark:bg-white bg-black">
              <span className="text-sm md:text-base ml-5">
                See all projects
              </span>
              <div className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-3 w-3 group-hover:h-10 group-hover:w-10 text-black dark:text-white overflow-hidden bg-white dark:bg-black rounded-full ml-7 flex items-center justify-center transition-all">
                <span className="group-hover:visible invisible">
                  <Icon icon="iconoir:arrow-tr" />
                </span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Works;
