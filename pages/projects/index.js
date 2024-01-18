/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

export default function Projects() {
  const ProjectCard = ({ project }) => {
    return (
      <div className="h-72 relative md:rounded-md overflow-hidden group">
        <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-5">
          <h1 className="text-white font-semibold text-2xl font-poppins">
            Airshare
          </h1>
          <div className="flex items-center mt-3">
            <p className=" text-neutral-100 bg-white/10 backdrop-blur text-xs px-2 py-1 rounded">
              January 2021
            </p>
            <Icon icon="mdi:github" className="text-white text-xl ml-auto" />
            <Icon
              height={24}
              icon="mdi:link"
              className="text-white text-xl ml-5"
            />
          </div>
          <p className="text-xs text-neutral-200 mt-2 leading-5 group-hover:mb-0 group-hover:pt-0 -mb-[130px] pt-10 transition-all opacity-0 group-hover:opacity-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            perspiciatis ratione ab hic odit distinctio libero dicta cumque
            voluptatum. Tempore consequatur animi quos quia perferendis at
            quisquam cum nemo atque.
          </p>
        </div>
        <img
          src="https://freemockup.net/wp-content/uploads/2019/02/001-devices-presentation-app-screens-project-showcase-graphic-psd-mockup.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center transition-all group-hover:scale-105 duration-1000"
        />
      </div>
    );
  };

  return (
    <div className="pt-12">
      <h1 className="text-3xl font-semibold text-center">Projects</h1>
      <p className="text-center text-sm mt-3 text-neutral-600 dark:text-neutral-400">
        This is a page for my projects that keep me alive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 md:mx-16 lg:mx-24 mt-7 md:mt-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
