/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import SecondaryArticle from "../../components/cards/articles/SecondaryArticle";
import { gql, client } from "../../helper/graph";

export async function getServerSideProps() {
  const query = gql`
    query Projects {
      projects {
        cover {
          url
        }
        description
        githubRepo
        hostingUrl
        id
        name
        stacks
      }
    }
  `;

  const { projects } = await client.request(query);
  return {
    props: {
      projects,
    },
  };
}

function Projects({ projects }) {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="theme-color" content="#0d1117" />
        <meta
          name="description"
          content="I've worked on tons of little projects over the years but
              these are the ones that I'm most proud of. Many of them are
              open-source, so if you see something that piques your interest,
              check out the code and contribute if you have ideas for how it can
              be improved."
        />
        <meta
          name="keywords"
          content="projects, priyangsu, priyangsu banerjee, sites, web, immovation, design, programmer, priyangsu, front-end, designer, ui, priyangsu banerjee, freelancer, portfolio, website, priyangsu banerjee, android, ios, robotics"
        />
        <meta name="author" content="Priyangsu Banerjee" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Projects" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://priyangsubanerjee.vercel.app"
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/USfDQuihRjifQsHuiXUI"
        />
        <meta
          property="og:description"
          content="I've worked on tons of little projects over the years but
              these are the ones that I'm most proud of. Many of them are
              open-source, so if you see something that piques your interest,
              check out the code and contribute if you have ideas for how it can
              be improved."
        />
        <meta property="og:site_name" content="Priyangsu Banerjee" />
      </Head>
      <div className="mt-5 lg:mt-0">
        <div className="space-y-5 px-5 lg:px-32 w-full lg:w-[80%]">
          <div className="space-y-4 lg:space-y-5">
            <h1 className="text-zinc-100 font-bold text-4xl lg:text-5xl leading-[1.2] lg:leading-[1.3]">
              Things{" "}
              <span className="text-transparent bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text">
                I&apos;ve made
              </span>{" "}
              trying to put my dent in the universe.
            </h1>
            <p className="text-sm text-slate-400 leading-6 lg:leading-7">
              I&apos;ve worked on tons of little projects over the years but
              these are the ones that I&apos;m most proud of. Many of them are
              open-source, so if you see something that piques your interest,
              check out the code and contribute if you have ideas for how it can
              be improved.
            </p>
            <div></div>
          </div>
        </div>
        <div className="lg:px-32 px-5 mt-20">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => {
                return (
                  <li
                    key={index}
                    className="group relative flex flex-col items-start border-b pb-10 border-slate-700 lg:border-none lg:pb-0"
                  >
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border-zinc-700/50 bg-slate-800 ring-0">
                      <img
                        alt=""
                        src={project.cover.url}
                        width="32"
                        height="32"
                        decoding="async"
                        className="h-12 w-12 object-cover rounded-full bg-white shrink-0"
                        loading="lazy"
                      ></img>
                    </div>
                    <h2 className="mt-5 text-base font-semibold text-zinc-100">
                      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-darkPrimary sm:-inset-x-6 sm:rounded-2xl"></div>
                      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">{project.name}</span>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-slate-400 leading-7">
                      {project.description.substring(0, 70) + "..."}
                    </p>
                    <div className="relative z-20 flex items-center space-x-4 font-mono text-xs mt-6">
                      {project.stacks.slice(0, 4).map((tech, index) => {
                        return (
                          <span key={index} className="text-sky-200">
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                    <div className="relative flex items-center space-x-10 z-20 mt-6">
                      {project.hostingUrl !== "" && (
                        <a
                          href={project.hostingUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="flex items-center bg-transparent border border-slate-500 rounded-full px-3 text-slate-200 hover:bg-sky-300 hover:text-black space-x-1 transition-all"
                        >
                          <i class="bi bi-link-45deg text-xl"></i>
                          <span className="text-xs">View project</span>
                        </a>
                      )}
                      {project.githubRepo !== "" && (
                        <a
                          hidden={project.githubRepo === ""}
                          href={project.githubRepo}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="flex items-center text-slate-100 hover:text-sky-300 space-x-2"
                        >
                          <i class="bi bi-github text-xl"></i>
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
