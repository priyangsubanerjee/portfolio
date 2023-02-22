/* eslint-disable @next/next/no-img-element */

import PrimaryArticle from "@/components/cards/articles/PrimaryArticle";
import ContactForm from "@/components/ContactForm";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import Socials from "@/components/Socials";
import { client, gql } from "@/helper/graph";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const query = gql`
    query Experiences {
      experiences {
        createdAt
        duration
        id
        publishedAt
        title
        updatedAt
        image {
          url
        }
      }
      articles {
        createdAt
        body
        slug
        id
        tags
        heading
        description
        cover {
          url
        }
        author {
          name
          bio
          image {
            url
          }
        }
      }
    }
  `;

  const response = await client.request(query);

  return {
    props: {
      experiences: response.experiences,
      articles: response.articles,
    },
    revalidate: 10,
  };
}

export default function Home({ experiences, articles }) {
  return (
    <>
      <Head>
        <title>Home | Priyangsu Banerjee - Full stack developer</title>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="theme-color" content="#0d1117" />
        <meta
          name="description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        />
        <meta
          name="keywords"
          content="sites, web, immovation, design, programmer, priyangsu, front-end, designer, ui, priyangsu banerjee, freelancer, portfolio, website, priyangsu banerjee, android, ios, robotics"
        />
        <meta name="author" content="Priyangsu Banerjee" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="lg:px-32 w-full overflow-hidden">
        <div className="lg:w-[70%] md:w-[85%] w-full px-5">
          <img
            src="/priyangsuThree.jpeg"
            className="h-28 w-28 rounded-full object-cover object-center"
            alt=""
          />
          <h1 className="text-4xl lg:text-6xl text-zinc-100 font-bold leading-[1.4] lg:leading-[1.3] mt-7">
            Full stack developer, designer, and{" "}
            <span className="text-transparent bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text">
              founder.
            </span>
          </h1>
          <p className="text-slate-300 leading-9 mt-5">
            I&apos;m Priyangsu, a software developer and entrepreneur based in
            India. I&apos;m currently building VBC, where we develop
            technologies that empower regular people to explore tech on their
            own terms.
          </p>
          <Socials className="mt-5" />
        </div>
        <UpcomingEvents className="mt-20" />
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12 flex flex-col">
            {articles.slice(0, 3).map((article, index) => {
              return <PrimaryArticle article={article} key={index} />;
            })}
          </div>
          <div className="px-5 lg:p-0">
            <ContactForm />
            <div class="rounded-2xl border p-6 border-slate-700/40 h-fit mt-7">
              <h2 class="flex text-sm font-semibold text-zinc-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none"
                >
                  <path
                    d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    class="fill-slate-100/10 stroke-slate-500"
                  ></path>
                  <path
                    d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                    class="stroke-slate-500"
                  ></path>
                </svg>
                <span class="ml-3">Experience</span>
              </h2>
              <ul class="mt-6 space-y-6">
                {experiences.map((experience, i) => {
                  return (
                    <li key={i} class="flex items-center">
                      <div class="h-12 w-12 rounded-full border border-slate-700 bg-slate-700/80 flex items-center justify-center">
                        <div class="h-10 w-10 rounded-full overflow-hidden">
                          <img
                            src={experience.image.url}
                            class="h-full w-full object-cover object-center"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="ml-4">
                        <p class="text-zinc-300 text-sm font-semibold">
                          {experience.title}
                        </p>
                        <small class="text-xs text-zinc-500">
                          {experience.duration}
                        </small>
                      </div>
                    </li>
                  );
                })}
                <a
                  class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-slate-50 font-medium text-slate-900 hover:bg-slate-100 active:bg-slate-200 active:text-slate-900/60 group mt-6 w-full cursor-pointer select-none"
                  download=""
                >
                  Download CV
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    class="h-4 w-4 stroke-slate-900 transition group-hover:stroke-slate-700 group-active:stroke-zinc-900/50"
                  >
                    <path
                      d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
