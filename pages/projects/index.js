/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

export default function Projects() {
  return (
    <div className="pt-12">
      <h1 className="text-3xl font-semibold text-center">Projects</h1>
      <p className="text-center text-sm mt-3 text-neutral-600 dark:text-neutral-400">
        This is a page for my projects that keep me alive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 md:mx-16 lg:mx-24 mt-7 md:mt-12">
        <div className="border-b border-neutral-200 dark:border-neutral-800 md:border-none py-10 md:py-0 px-6 md:px-0">
          <img
            loading="lazy"
            src="https://venngage-wordpress.s3.amazonaws.com/uploads/2023/11/Project_Life_Cycle_blog_header.png"
            alt=""
            className="rounded-lg w-full h-44 object-cover hidden md:block"
          />
          <h2 className="text-lg font-semibold mt-3">Project name</h2>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-6 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            voluptatum?
          </p>
          <div className="flex uppercase text-xs font-semibold tracking-wider mt-4">
            <button className="md:hidden mr-4 flex items-center space-x-2 uppercase text-xs tracking-wider font-medium text-blue-500 dark:text-neutral-200">
              <span>Expand</span>
              <Icon height={20} icon="pepicons-pencil:expand" />
            </button>
            <button className="hidden mr-4 md:flex items-center space-x-2 uppercase text-xs tracking-wider font-medium text-blue-500 dark:text-neutral-200">
              <span>Preview</span>
              <Icon icon="ion:open-outline" />
            </button>
            <button className="hidden md:flex items-center space-x-2 uppercase text-xs tracking-wider font-medium text-neutral-500 dark:text-neutral-200">
              <span>GITHUB</span>
              <Icon icon="ion:open-outline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
