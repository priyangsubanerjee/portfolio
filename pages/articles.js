import React from "react";
import PrimaryArticle from "../components/PrimaryArticle";
import SecondaryArticle from "../components/SecondaryArticle";

function articles() {
  return (
    <div>
      <div className="px-5 mt-5 lg:mt-7">
        <div className="space-y-5  lg:px-32 w-full lg:w-[80%]">
          <div className="space-y-4 lg:space-y-5 lg:mt-24">
            <h1 className="text-zinc-100 font-bold text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.3]">
              Writing on software development, entrepreneurship, and the
              open-source industry.
            </h1>
            <p className="text-sm text-zinc-400 leading-6 lg:leading-7">
              All of my long-form thoughts on programming, leadership, product
              design, and more, collected in chronological order.
            </p>
            <div></div>
          </div>
        </div>
        <div className="lg:px-32 mt-20">
          <div className="md:border-l md:border-zinc-700/40 md:pl-6">
            <div className="flex max-w-3xl flex-col space-y-16">
              <SecondaryArticle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default articles;
