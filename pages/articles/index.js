import React from "react";
import Article from "../../components/Article";

function Articles() {
  return (
    <div className="space-y-16">
      <div className="w-[60%] space-y-4">
        <h1 className="text-4xl font-bold leading-[1.4] text-gray-700">
          Writing on software design, company building, and the tech industry.
        </h1>
        <p className="text-gray-500 leading-7 text-sm">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </div>
      <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div class="flex max-w-3xl flex-col space-y-16">
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
}

export default Articles;
