import Link from "next/link";
import React from "react";

function Socials() {
  return (
    <div className="flex space-x-5 lg:space-x-6 items-center text-zinc-400 text-lg lg:text-xl">
      <Link href="https://github.com/priyangsubanerjee">
        <i className="bi bi-github transition-all hover:text-zinc-100 cursor-pointer"></i>
      </Link>
      <Link href="https://www.linkedin.com/in/priyangsu-banerjee/">
        <i className="bi bi-linkedin transition-all hover:text-zinc-100 cursor-pointer"></i>
      </Link>
      <Link href="https://www.instagram.com/priyangsu__banerjee/">
        <i className="bi bi-instagram transition-all hover:text-zinc-100 cursor-pointer"></i>
      </Link>
      <Link href="https://twitter.com/oxygenated_fire">
        <i className="bi bi-twitter transition-all hover:text-zinc-100 cursor-pointer"></i>
      </Link>
      <Link href="https://www.quora.com/profile/Priyangsu-Banerjee-1">
        <i className="bi bi-quora transition-all hover:text-zinc-100 cursor-pointer"></i>
      </Link>
    </div>
  );
}

export default Socials;
