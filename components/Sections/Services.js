import React from "react";

function Services() {
  return (
    <div className="mt-56 px-6 lg:px-16">
      <h2 className="text-4xl lg:text-5xl font-poppins">
        I can help you with ...
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20 mb-10">
        <div className="pl-8 border-l-2 border-neutral-400 dark:border-neutral-700">
          <h1 className="text-5xl text-neutral-400 dark:text-neutral-700">
            01
          </h1>
          <h2 className="mt-10 text-2xl">Design</h2>
          <p className="line-clamp-4 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
            According to a study, 75% of users judge a company&apos;s credit by
            its digital presence, can venture into the world of design and
            create a lasting impression.
          </p>
        </div>
        <div className="pl-8 border-l-2 border-neutral-400 dark:border-neutral-700">
          <h1 className="text-5xl text-neutral-400 dark:text-neutral-700">
            02
          </h1>
          <h2 className="mt-10 text-2xl">Development</h2>
          <p className="line-clamp-4 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
            Having footprints in the industry for more than 7 years, I can help
            you with the digital transformation of ideas into reality.
          </p>
        </div>
        <div className="pl-8 border-l-2 border-neutral-400 dark:border-neutral-700">
          <h1 className="text-5xl text-neutral-400 dark:text-neutral-700">
            03
          </h1>
          <h2 className="mt-10 text-2xl">Consultation</h2>
          <p className="line-clamp-4 mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-7">
            Sometimes you just need a second opinion. Understanding the
            requirements of your business, can help build a better product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
