/* eslint-disable @next/next/no-img-element */
import React from "react";

function Gallery() {
  return (
    <div className="flex snap-mandatory snap-x overflow-auto space-x-7 px-5">
      <img
        src="/dev.png"
        alt=""
        className="rounded shrink-0 snap-center lg:w-96 object-cover"
      />
      <img
        src="/dev2.png"
        alt=""
        className="rounded shrink-0 snap-center lg:w-96 object-cover"
      />
      <img
        src="/dev3.png"
        alt=""
        className="rounded shrink-0 snap-center lg:w-96 object-cover"
      />
    </div>
  );
}

export default Gallery;
