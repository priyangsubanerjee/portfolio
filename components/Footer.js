import React from "react";

function Footer() {
  return (
    <div className="border-t p-16 flex justify-between">
      <ul className="flex space-x-7 items-center text-gray-700">
        <li className="text-sm">About</li>
        <li className="text-sm">Articles</li>
        <li className="text-sm">Projects</li>
        <li className="text-sm">Speaking</li>
        <li className="text-sm">Uses</li>
      </ul>
      <p className="text-sm text-gray-400">
        © 2022 Priyangsu Banerjee. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
