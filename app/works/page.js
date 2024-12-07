"use client";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects, recentProjects } from "@/static/projects";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Works() {
  const [triggerOn, setTriggerOn] = useState(false);

  console.log(recentProjects());

  const ProjectCard = ({ project }) => {
    return (
      <li>
        <h2 className="text-sm md:text-base">{project.name}</h2>
        <p className="text-xs md:text-sm line-clamp-2 text-neutral-500 dark:text-neutral-400 leading-6 md:leading-7 mt-2">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-4">
          {project.preview && (
            <Link href={project.preview}>
              <button className="flex items-center space-x-2 text-sm hover:underline text-neutral-500 dark:text-neutral-200">
                <span>Open</span>
                <Icon icon="ion:open-outline" />
              </button>
            </Link>
          )}

          {project.github && (
            <Link href={project.github}>
              <button className="flex items-center space-x-2 text-sm hover:underline text-neutral-500 dark:text-neutral-200">
                <span>Github</span>
                <Icon icon="ion:open-outline" />
              </button>
            </Link>
          )}
        </div>
      </li>
    );
  };

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

      <div className="px-4 md:px-16 lg:px-24 mt-10 pb-28">
        <Accordion defaultExpandedKeys={["0"]} selectionMode="multiple">
          {recentProjects().map((group, index) => {
            return (
              <AccordionItem
                key={index}
                aria-label={group.year}
                title={
                  <p className="dark:text-white/50 text-black/80 leading-[1] text-[30px] md:text-[40px]">
                    .{group.year.toString().slice(2)}
                  </p>
                }
              >
                <div className="pb-10">
                  <ul className="grid grid-cols-1 md:grid-cols-2 mt-2 px-10 gap-10 border-l pl-6 md:pl-20 max-w-5xl ml-2 md:ml-10 border-neutral-300 dark:border-neutral-700">
                    {group.projects.map((project, index) => {
                      return <ProjectCard key={index} project={project} />;
                    })}
                  </ul>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="mt-32">
          <h2 className="text-sm px-5 text-neutral-600 font text-center w-fit mx-auto border-b pb-5">
            More projects are on the way{" "}
            <span className="text-xl translate-y-[2px] inline-block">🚃</span>
          </h2>
          <div className="flex mt-5 gap-3 items-center justify-center text-neutral-800">
            <ul className="flex items-center justify-center flex-wrap gap-5 text-sm text-neutral-900 dark:text-neutral-300">
              <li>
                <Link href={"https://github.com/priyangsubanerjee"}>
                  Github
                </Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/in/priyangsu-banerjee/"}>
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href={"https://www.instagram.com/priyangsu__banerjee/"}>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.quora.com/profile/Priyangsu-Banerjee-1"}
                >
                  Quora
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
