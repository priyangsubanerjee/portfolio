import Head from "next/head";
import React from "react";
import SecondaryArticle from "../../components/cards/articles/SecondaryArticle";
import { gql, client } from "../../helper/graph";

export async function getStaticProps() {
  const query = gql`
    query Articles {
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

  const { articles } = await client.request(query);

  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
}

function Articles({ articles }) {
  return (
    <div>
      <Head>
        <title>Articles</title>
        <link rel="apple-touch-icon" href="/favicon.jpeg"></link>
        <link rel="icon" type="image/x-icon" href="/favicon.jpeg"></link>
        <meta name="theme-color" content="#0d1117" />
        <meta
          name="description"
          content="Articles on software development, entrepreneurship, and the open-source industry. All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
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
      <div className="mt-5 lg:mt-0">
        <div className="space-y-5 px-5 lg:px-32 w-full lg:w-[80%]">
          <div className="space-y-4 lg:space-y-5">
            <h1 className="text-zinc-100 font-bold text-4xl lg:text-5xl leading-[1.2] lg:leading-[1.3]">
              Writing on{" "}
              <span className="text-transparent bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text">
                software development,
              </span>{" "}
              open-source industry and{" "}
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text">
                dogs.
              </span>{" "}
            </h1>
            <p className="text-sm text-slate-400 leading-6 lg:leading-7">
              All of my long-form thoughts on programming, leadership, product
              design, and more, collected in chronological order.
            </p>
            <div></div>
          </div>
        </div>
        <div className="lg:px-32 mt-20">
          <div className="md:border-l md:border-darkPrimary md:pl-6">
            <div className="flex max-w-3xl flex-col space-y-16">
              {articles.map((article, index) => {
                return <SecondaryArticle key={index} article={article} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
