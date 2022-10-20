/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div>
      <div className="px-5 mt-5 lg:mt-7">
        <div className="space-y-5  lg:px-32 w-full lg:w-[80%]">
          <div className="space-y-4 lg:space-y-5 lg:mt-24">
            <h1 className="text-zinc-100 font-bold text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.3]">
              Things I&apos;ve made trying to put my dent in the universe.
            </h1>
            <p className="text-sm text-zinc-400 leading-6 lg:leading-7">
              I&apos;ve worked on tons of little projects over the years but
              these are the ones that I&apos;m most proud of. Many of them are
              open-source, so if you see something that piques your interest,
              check out the code and contribute if you have ideas for how it can
              be improved.
            </p>
          </div>
        </div>
        <div className="mt-20">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:px-32">
            <ProjectCard />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
