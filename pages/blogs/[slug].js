/* eslint-disable @next/next/no-img-element */
import React from "react";
import { blogs } from "@/static/blogs";
import { Button, Spinner } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export function getServerSideProps({ params }) {
  const slug = params.slug;
  const blog = blogs.find((blog) => blog.slug === slug);
  return {
    props: {
      blog: JSON.parse(JSON.stringify(blog)),
    },
  };
}

function Blog({ blog }) {
  const router = useRouter();
  const [collectRating, setCollectRating] = React.useState(false);

  const ProceedToBlog = () => {
    window.open(blog.url, "_blank");
    let timeReq = blog.estimatedReadingTime * 60000;
    let reactedSlugs = localStorage.getItem("reactedSlugs")
      ? JSON.parse(localStorage.getItem("reactedSlugs"))
      : [];

    if (reactedSlugs.includes(blog.slug)) return;
    reactedSlugs.push(blog.slug);
    localStorage.setItem("reactedSlugs", JSON.stringify(reactedSlugs));
    setTimeout(() => {
      setCollectRating(true);
    }, timeReq);
  };

  const CopyUrl = () => {
    try {
      navigator.clipboard.writeText(blog.url);
      document.getElementById("copytext").innerHTML = "Copied!";
      setTimeout(() => {
        document.getElementById("copytext").innerHTML = "Copy url";
      }, 2000);
    } catch (error) {
      alert("Unsupported Browser");
    }
  };

  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta name="author" content="Priyangsu Banerjee" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta property="twitter:card" content={blog.image}></meta>
        <meta property="twitter:title" content={blog.title}></meta>
        <meta property="twitter:description" content={blog.description}></meta>
        <meta property="og:image" content={blog.image}></meta>
        <meta property="og:title" content={blog.title}></meta>
        <meta property="og:description" content={blog.description} />
        <meta
          property="og:url"
          content={`https://priyangsu.dev/blogs/${blog.slug}`}
        ></meta>
      </Head>

      <img
        src={blog.image}
        className="mx-auto w-full object-cover md:object-contain h-[200px] md:h-auto md:max-w-[500px] md:rounded-md md:mt-10"
        alt=""
      />

      <div className="px-4 mt-10">
        <h1 className="text-2xl md:text-5xl font-bold text-center leading-[1.4]">
          {blog.title}
        </h1>
        <p className="text-center text-xs md:text-sm mt-3 md:mt-6 dark:text-neutral-400 text-neutral-600 leading-6">
          {blog.description}
        </p>
        <div className="flex text-sm mt-9 items-center justify-center">
          <div className="md:flex items-center space-x-2 mr-8 hidden">
            <span>📅</span>
            <span>{blog.date}</span>
          </div>
          <Link href={blog.authorProfile}>
            <div className="flex items-center space-x-2 mr-8">
              <span>👔</span>
              <span>@priyangsubanerjee</span>
            </div>
          </Link>
          <div className="flex items-center space-x-2">
            <span>⏰</span>
            <span>{blog.estimatedReadingTime} mins read</span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-10">
          <Button
            onClick={ProceedToBlog}
            radius="none"
            className="bg-slate-100 text-black rounded flex items-center"
          >
            <span>Read the full story</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1200px-Notion-logo.svg.png"
              className="w-5 h-5"
              alt=""
            />
          </Button>
          <Button
            radius="none"
            onClick={CopyUrl}
            className="bg-neutral-800 text-white rounded flex items-center"
          >
            <span id="copytext">Copy url</span>
            <Icon height={16} icon="solar:copy-linear" />
          </Button>
        </div>
      </div>

      {collectRating && (
        <div className="fixed inset-0 h-full w-full bg-black/80 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white  w-full md:max-w-[450px] p-6 md:p-8 md:rounded-md">
            <h1 className="text-lg font-semibold">Liked the story?</h1>
            <p className="text-sm leading-7 text-neutral-500 mt-2">
              Feedback plays a vital role in improving the quality of the
              content. Please rate the story and help me improve.
            </p>
            <div className="grid grid-cols-2 gap-2 mt-6">
              <Button
                onClick={() => setCollectRating(false)}
                radius="none"
                className="rounded"
              >
                <span>No</span>
                <span>👎</span>
              </Button>
              <Button
                onClick={() => setCollectRating(false)}
                radius="none"
                className="rounded bg-black text-white"
              >
                <span>Yes</span>
                <span>👍</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
