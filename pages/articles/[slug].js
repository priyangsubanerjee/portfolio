/* eslint-disable @next/next/no-img-element */
import { client, gql } from "@/helper/graph";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

export async function getServerSideProps(ctx) {
  const slug = ctx.params.slug;
  const query = gql`
      query Articles {
        article(where: { slug: "${slug}" }) {
          createdAt
          body
          slug
          id
          tags
          heading
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

  const { article } = await client.request(query);
  return {
    props: {
      article,
      body: await serialize(article.body),
    },
  };
}

function ArticleSlug({ article, body }) {
  const hashColors = [
    "text-sky-300",
    "text-orange-400",
    "text-pink-400",
    "text-green-400",
    "text-purple-400",
    "text-yellow-400",
    "text-red-400",
    "text-blue-400",
    "text-indigo-400",
    "text-teal-400",
    "text-cyan-400",
    "text-gray-400",
    "text-red-400",
    "text-blue-400",
  ];

  const randomColor = () => {
    return hashColors[Math.floor(Math.random() * hashColors.length)];
  };

  const router = useRouter({});
  return (
    <div className="-mt-32">
      <Head>
        <title>{article.heading}</title>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="theme-color" content="#0d1117" />
        <meta name="description" content={article.description} />
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
        <meta name="twitter:card" content={article.cover.url} />
        <meta
          name="twitter:site"
          content="https://priyangsubanerjee.vercel.app"
        />
        <meta name="twitter:title" content={article.heading} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.cover.url} />
        <meta property="og:title" content={article.heading} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://priyangsubanerjee.vercel.app"
        />
        <meta property="og:image" content={article.cover.url} />
        <meta property="og:description" content={article.description} />
        <meta property="og:site_name" content="Priyangsu Banerjee" />
      </Head>
      <div className="flex flex-col space-x-10">
        <div className="w-full shrink-0 overflow-hidden">
          <img
            src={article.cover.url}
            className="h-60 lg:h-96 w-full object-cover "
            alt=""
          />
          <div className="lg:px-16 px-4 mt-10 lg:mt-16 lg:w-[850px]">
            <div className="flex items-center w-full">
              <img
                src={article.author.image.url}
                alt=""
                className="h-14 w-14 object-cover rounded-full"
              />
              <div className="ml-4 space-y-1">
                <h1 className="text-slate-100 font-semibold text-lg lg:text-xl">
                  {article.author.name}
                </h1>
                <p className="text-slate-400 text-sm">
                  {new Date(article.createdAt).toDateString()}
                </p>
              </div>
              <div className="flex items-center ml-auto shrink-0 lg:ml-10 space-x-3">
                <button className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-darkPrimary border border-darkPrimary">
                  <i class="bi bi-bookmark"></i>
                </button>
                <button className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-darkPrimary border border-darkPrimary">
                  <i class="bi bi-share"></i>
                </button>
              </div>
            </div>
            <h1 className="mt-10 text-3xl lg:text-5xl font-extrabold text-slate-100 leading-[1.4] lg:leading-[1.4]">
              {article.heading}
            </h1>
            <ul className="flex items-center space-x-4 text-slate-400 mt-7">
              {article.tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <span className={`${randomColor()} mr-1`}>#</span>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="h-auto mb-10"></div>
      </div>
      <div className="lg:px-16 px-4 lg:w-[850px]">
        <div className="prose max-w-full prose-h1:text-3xl prose-h2:text-2xl prose-h2:pb-0 prose-h3:text-xl prose-p:text-sm prose-li:text-sm lg:prose-li:text-base prose-li:leading-8 lg:prose-li:leading-8 prose-li:text-slate-300 lg:prose-p:text-base prose-p:leading-8 lg:prose-p:leading-8 prose-p:text-slate-200 prose-headings:text-slate-100 prose-img:rounded-md prose-img:w-full prose-img:object-cover prose-code:font-light prose-code:text-slate-300 prose-code:bg-gray-600 prose-pre">
          <MDXRemote {...body} />
        </div>
      </div>
    </div>
  );
}

export default ArticleSlug;
