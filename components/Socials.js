import Link from "next/link";
import React from "react";

function Socials() {
  return (
    <div className="flex space-x-5 lg:space-x-6 items-center text-zinc-400 text-lg lg:text-xl">
      <Link href="https://github.com/priyangsubanerjee">
        <i className="bi bi-github"></i>
      </Link>
      <Link href="https://www.linkedin.com/in/priyangsu-banerjee/">
        <i className="bi bi-linkedin"></i>
      </Link>
      <Link href="https://www.instagram.com/priyangsu__banerjee/">
        <i className="bi bi-instagram"></i>
      </Link>
      <Link href="https://twitter.com/oxygenated_fire">
        <i className="bi bi-twitter"></i>
      </Link>
    </div>
  );
}

export default Socials;
