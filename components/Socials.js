import React from "react";

function Socials() {
  return (
    <div className="space-y-6">
      <ul className="space-y-4">
        <li className="flex items-center text-gray-600">
          <i class="bi bi-twitter"></i>
          <span className="text-xs ml-2">Follow on Twitter</span>
        </li>
        <li className="flex items-center text-gray-600">
          <i class="bi bi-instagram"></i>
          <span className="text-xs ml-2">Follow on Instagram</span>
        </li>
        <li className="flex items-center text-gray-600">
          <i class="bi bi-github"></i>
          <span className="text-xs ml-2">Follow on Github</span>
        </li>
        <li className="flex items-center text-gray-600">
          <i class="bi bi-linkedin"></i>
          <span className="text-xs ml-2">Follow on LinkedIn</span>
        </li>
      </ul>
      <hr />
      <div className="flex items-center text-gray-600">
        <i class="bi bi-envelope-fill"></i>
        <span className="text-xs ml-2">priyangsu26@gmail.com</span>
      </div>
    </div>
  );
}

export default Socials;
