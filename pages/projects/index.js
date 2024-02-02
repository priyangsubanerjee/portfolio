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
    const [isPlaying, setIsPlaying] = React.useState(false);
    return (
      <div className="h-96 relative md:rounded-xl overflow-hidden group">
        <video
          id="video"
          onPlay={() => {
            setIsPlaying(true);
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          playsInline
          controls={false}
          muted
        >
          <source src="/projects/airshare/mock.mov" type="video/mp4" />
        </video>
        <img
          className="absolute inset-0 h-full w-full"
          style={{
            opacity: isPlaying ? 0 : 1,
          }}
          src="/projects/airshare/mock.png"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex items-end">
          <div className="w-full px-12 mb-7 flex items-center justify-between">
            <h1 className="text-5xl text-white font-semibold">Airshare.</h1>
            <div className="flex items-center justify-between space-x-5 bg-white/10 backdrop-blur-md rounded-full px-5 py-2">
              <Icon height={20} icon="fluent:open-20-filled" />
              <Icon height={20} icon="mdi:github" />
              <Icon height={20} icon="lucide:copy" />
            </div>
          </div>
        </div>
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
