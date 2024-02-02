/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Airshare",
      description:
        "A file sharing app that allows you to share files with your friends without any hassle.",
      image:
        "https://freebiesbug.com/wp-content/uploads/2023/09/original-phone-mockups.jpg",
      github: "",
      link: "",
      cover:
        "https://freebiesbug.com/wp-content/uploads/2023/09/original-phone-mockups.jpg",
    },
  ];

  const ProjectCard = ({ project }) => {
    return (
      <div className="h-96 relative md:rounded-xl overflow-hidden group">
        <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-10">
          <h1 className="text-white font-light text-5xl font-poppins">
            {project.title}
          </h1>
          <div className="flex items-center mt-7">
            <button className="text-black bg-white backdrop-blur text-xs px-4 py-1 rounded-full flex items-center space-x-2">
              <span>Read case study</span>{" "}
              <span className="text-lg">&rarr;</span>
            </button>
            <Icon icon="mdi:github" className="text-white text-xl ml-auto" />
            <Icon
              height={24}
              icon="mdi:link"
              className="text-white text-xl ml-5"
            />
          </div>
        </div>
        <video
          id="video"
          onPlay={() => {
            console.log("Playing now");
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          playsInline
          muted
        >
          <source src="/mockups/mock.mov" type="video/mp4" />
        </video>
      </div>
    );
  };

  return (
    <div className="pt-12">
      <h1 className="text-3xl font-semibold text-center">Projects</h1>
      <p className="text-center text-sm mt-3 text-neutral-600 dark:text-neutral-400">
        This is a page for my projects that keep me alive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 md:mx-16 lg:mx-24 mt-7 md:mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
