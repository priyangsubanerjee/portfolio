/* eslint-disable @next/next/no-img-element */
import React from "react";

function Gallery() {
  return (
    <div className="flex snap-mandatory snap-x overflow-auto space-x-7 px-5">
      <img
        src="/dev.png"
        alt=""
        className="rounded shrink-0 snap-center lg:w-96"
      />
      <img
        src="/dev.png"
        alt=""
        className="rounded shrink-0 snap-center lg:w-96"
      />
    </div>
  );
}

export default Gallery;
