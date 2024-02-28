/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Runway from "@/components/Runway";
import Stamp from "@/components/Stamp";
import gsap from "gsap";
import Introduction from "@/components/Sections/Introduction";
import Services from "@/components/Sections/Services";
import Works from "@/components/Sections/Works";
import Courtsey from "@/components/Sections/Courtsey";
import Process from "@/components/Sections/Process";
import Head from "next/head";
import Rate from "@/components/Modals/Rate";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [parked, setParked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setParked(true);
    }, [4500]);
  }, [parked]);

  return (
    <>
      <Head>
        <title>Priyangsu Banerjee - Full Stack Developer</title>
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
        <meta
          property="twitter:title"
          content="Priyangsu Banerjee - Full Stack Developer"
        ></meta>
        <meta
          property="twitter:description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/db9kd4qbi/image/upload/v1699945699/Personal/Priyangsu_Banerjee_ew1cz3.png"
        ></meta>
        <meta
          property="og:title"
          content="Priyangsu Banerjee - Full Stack Developer"
        ></meta>
        <meta
          property="og:description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        />
        <meta property="og:url" content="https://priyangsu.dev"></meta>
      </Head>
      <section className="max-h-[calc(100%-64px)] lg:max-h-[calc(100%-96px)] h-full w-full bg-transparent relative flex flex-col pb-8 lg:pb-10">
        <Runway />
        <div className="mt-auto lg:flex lg:justify-between lg:items-end px-6 lg:px-16 relative">
          <h1 className="text-[60px] tracking-tight  lg:text-[100px] text-neutral-800 dark:text-neutral-200 text-left leading-[55px] lg:leading-[85px] font-black">
            FULL <br />{" "}
            <span
              className={`
                      ${
                        parked ? "text-red-500" : "text-neutral-500"
                      } transition-all
            `}
            >
              STACK
            </span>{" "}
            <br /> DEVELOPER
          </h1>
          <img
            src="/gallery/pk1.png"
            className="absolute top-0 right-0 w-[50%] h-auto lg:w-[30%] lg:h-auto opacity-0 pointer-events-none"
            alt="Priyangsu Banerjee"
            id="pk1"
          />
          <img
            src="/gallery/sp2.png"
            className="absolute top-0 right-0 w-[50%] h-auto lg:w-[30%] lg:h-auto opacity-0 pointer-events-none"
            alt="Priyangsu Banerjee | Full Stack Developer"
            id="sp2"
          />
          <img
            src="/gallery/pb1.png"
            className="absolute top-[20%] right-0 w-[50%] h-auto lg:w-[30%] lg:h-auto opacity-0 pointer-events-none"
            alt="Priyangsu Banerjee"
            id="pb1"
          />
          <img
            src="/gallery/dw2.png"
            className="absolute top-[40%] right-0 w-[50%] h-auto lg:w-[30%] lg:h-auto opacity-0 pointer-events-none"
            alt="Priyangsu Banerjee"
            id="dw2"
          />
          <div className="lg:w-[30%] flex flex-col items-end relative">
            <Stamp />
            <p className="text-right leading-6 lg:leading-7 mt-6 lg:mt-0 text-sm lg:text-base">
              specialized in Web Design & Development, UX / UI, Backend, and
              Front End Development.
            </p>
          </div>
        </div>
      </section>
      <section className="h-auto w-full flex flex-col pb-8 lg:pb-10">
        <Introduction />
        <Services />
        <Works />
        <Process />
        <Courtsey />
      </section>
      <footer className="mt-20 mb-10 border-t dark:border-t-white/30 border-t-black/30 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="w-full">
          <div className="lg:flex space-y-10 lg:space-y-0 items-center justify-between mt-10">
            <span className="text-sm">
              © 2023All Rights Reserved. Design & Coded with ❤️️
            </span>
            <ul className="lg:flex space-y-3 lg:space-y-0 items-center lg:first-letter:space-x-8 text-sm">
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
            <ul className="flex items-center space-x-6 lg:space-x-8 text-sm">
              <li>
                <Link href={"https://razorpay.me/@priyangsubanerjee"}>
                  Support
                </Link>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Priyangsu Banerjee",
                      text: "Full Stack Developer",
                      url: "https://priyangsubanerjee.com",
                    });
                  } else {
                    alert("Share not supported in your browser");
                  }
                }}
              >
                Share
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
