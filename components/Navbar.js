import React from "react";

function Navbar() {
  return (
    <nav className="px-6 lg:px-16 mt-7 mb-12 flex items-center justify-between relative">
      <div>
        <h1 className="font-semibold text-xl">
          Priyangsu <span className="text-neutral-500">Banerjee.</span>
        </h1>
      </div>
      <ul className="hidden lg:flex items-center justify-center space-x-9 absolute left-1/2 -translate-x-1/2">
        <li>Home</li>
        <li>Work</li>
        <li>Process</li>
        <li>Make it happen</li>
      </ul>
      <button>Dark</button>
    </nav>
  );
}

export default Navbar;
