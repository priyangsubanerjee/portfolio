/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Airshare",
      description:
        "A file sharing app that allows you to share files with your friends without any hassle.",
      link: "",
      coverImage: "/projects/airshare/mock.png",
      coverVideo: "/projects/airshare/mock.mov",
    },
    {
      title: "Doctor doggy",
      description:
        "Revolutionizing pet healthcare by providing a platform for pet owners to connect with veterinarians.",
      link: "",
      coverImage: "/projects/doctordoggy/mock.png",
      coverVideo: "/projects/doctordoggy/mock.mov",
    },
    {
      title: "Romoni",
      description:
        "Ecom platform for ethnic wear. Client wanted a simple and elegant design for their website.",
      link: "",
      coverImage: "/projects/romoni/mock.png",
      coverVideo: "/projects/romoni/mock.mov",
    },
  ];

  const ProjectCard = ({ project }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    return (
      <div className="relative">
        <div className="h-80 md:h-96 relative rounded-xl overflow-hidden group">
          <video
            id="video"
            onPlay={() => {
              setIsPlaying(true);
            }}
            className="absolute inset-0 h-full w-full object-cover object-center brightness-90"
            autoPlay
            playsInline
            muted
          >
            <source src={project.coverVideo} type="video/mp4" />
          </video>
          <img
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: isPlaying ? 0 : 1,
            }}
            src={project.coverImage}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end">
            <div className="w-full px-5 flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-3xl lg:text-3xl text-white font-semibold">
                  {project.title}
                </h1>
                <p className="text-sm leading-7 text-white/80 mt-3 max-w-md line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center px-6 mt-3 mb-4 md:mb-6">
              <div className="flex z-20 brightness-75 hover:brightness-100  w-fit text-white items-center justify-between space-x-5 bg-white/20 backdrop-blur-lg rounded-full px-5 py-2 transition-all">
                <Icon height={18} icon="fluent:open-20-filled" />
                <Icon height={18} icon="mdi:github" />
                <Icon height={18} icon="lucide:copy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold text-center">Projects</h1>
      <p className="text-center text-sm mt-3 text-neutral-600 dark:text-neutral-400">
        This is a page for my projects that keep me alive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-3 md:px-0 md:gap-3 md:max-w-4xl lg:max-w-6xl md:mx-auto mt-7 md:mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-16">
        <p className="text-sm">more mockups are on the way</p>
        <Link className="mt-4" href={"https://github.com/priyangsubanerjee"}>
          <Button>Visit my github for more projects.</Button>
        </Link>
      </div>
    </div>
  );
}
