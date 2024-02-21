/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";

function Gallery() {
  const images = [
    "/gallery/sp2.png",
    "/gallery/dw1.png",
    "/gallery/pb1.png",
    "/gallery/pk1.png",
    "/gallery/pk3.png",
    "/gallery/sp1.png",
    "/gallery/pk4.png",
    "/gallery/sw1.png",
  ];
  return (
    <div>
      <Head>
        <title>Priyangsu Banerjee | Gallery</title>
        <link rel="canonical" href="https://priyangsu.dev/gallery" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5 lg:px-16 pb-9">
        {images.map((image, index) => (
          <div key={index} className="h-full w-full overflow-hidden">
            <img
              src={image}
              alt="Priyangsu Banerjee"
              className="w-full h-full hover:grayscale-0 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
