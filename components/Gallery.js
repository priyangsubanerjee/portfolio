/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import featuredGallery from "../static/featuredGallery";

function Gallery() {
  return (
    <div className="flex snap-mandatory snap-x overflow-auto space-x-7 px-5 scrollbar-hide">
      {featuredGallery.map((image, i) => {
        return (
          <Link href={image.link} key={i}>
            <img
              key={i}
              src={image.path}
              title={image.title}
              alt={image.title}
              className="cursor-pointer rounded hover:scale-110 transition-all duration-500 shrink-0 snap-center lg:w-96 object-cover overflow-hidden"
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Gallery;
