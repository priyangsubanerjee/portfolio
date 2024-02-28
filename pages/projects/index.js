/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import Head from "next/head";
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
    <>
      <Head>
        <title>Projects | Fueiling up</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/db9kd4qbi/image/upload/v1700054426/Personal/IMG_5D022AA3C935-1_psqtcn.jpg"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/db9kd4qbi/image/upload/v1700054426/Personal/IMG_5D022AA3C935-1_psqtcn.jpg"
          type="image/x-icon"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://res.cloudinary.com/db9kd4qbi/image/upload/v1700054426/Personal/IMG_5D022AA3C935-1_psqtcn.jpg"
        />
        <meta
          name="description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        />
        <meta
          name="keywords"
          content="Freelance developer India,Full-stack developer India,Web developer India,Mobile app developer India,React developer India,PHP developer India,Python developer India,Java developer India,WordPress developer India,E-commerce development India,API development India,Cloud computing India,Software development consultant India,Startup development India,MVP development India,Bug fixing India,Website maintenance India,SEO optimization India,Digital marketing expertise India,Remote developer India,Priyangsu Banerjee developer Durgapur,Durgapur freelance developer,West Bengal entrepreneur,Indian tech talent,Reliable developer India,Passionate entrepreneur India,Creative problem solver India,Client-focused developer India,Results-oriented developer India,Experienced developer India,Highly motivated developer India,Award-winning developer India,Top freelancer India,Tech leader India,Emerging entrepreneur India,Fintech developer India,Healthcare app developer India,E-learning platform developer India,Travel app developer India,Saas development India,Blockchain developer India,AI & ML developer India,Data science expertise India,IoT development India,Cybersecurity expertise India,Affordable developer India,Quick turnaround time India,Open communication India,Long-term partnership India,Free consultation India,Satisfaction guaranteed India,24/7 support India,English speaking developer India,Remote work experience India,Team player India,Adaptable and flexible India,Continuous learning India,Positive attitude India,Strong work ethic India,Client testimonials India,Case studies India,Blog posts India,Active on social media India,Engaging content India,Thought leadership India,Industry events India,Networking opportunities India,Building relationships India,Giving back to the community India,Social responsibility India,Priyangsu Banerjee portfolio,Priyangsu Banerjee LinkedIn,Priyangsu Banerjee Upwork,Priyangsu Banerjee Fiverr,Hire Priyangsu Banerjee,Contact Priyangsu Banerjee,Get a quote from Priyangsu Banerjee,Work with Priyangsu Banerjee,Let Priyangsu Banerjee help you,Priyangsu Banerjee, the developer you need, Fullstack developer, Web development, Portfolio websites, Ecommerce development, Full stack applications, West Bengal developer, Odisha developer, Web design, Responsive web development, Custom web solutions, Front-end development, Back-end development, Mobile-friendly websites, UI/UX design, Website optimization, Cross-platform development, Web programming, Website maintenance, Database management, Software development East India, Code optimization, Scalable web solutions, Fullstack services, Tech stack expertise, Professional web developer, CMS integration, West Bengal ecommerce, Odisha portfolio websites, Application development, Innovative web solutions"
        />
        <meta name="author" content="Priyangsu Banerjee" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />

        <meta
          property="twitter:card"
          content="https://res.cloudinary.com/db9kd4qbi/image/upload/v1699945699/Personal/Priyangsu_Banerjee_ew1cz3.png"
        ></meta>
        <meta property="twitter:title" content="Projects | Fueiling up"></meta>
        <meta
          property="twitter:description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/db9kd4qbi/image/upload/v1699945699/Personal/Priyangsu_Banerjee_ew1cz3.png"
        ></meta>
        <meta property="og:title" content="Projects | Fueiling up"></meta>
        <meta
          property="og:description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        />
        <meta property="og:url" content="https://priyangsu.dev"></meta>
      </Head>
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
    </>
  );
}
