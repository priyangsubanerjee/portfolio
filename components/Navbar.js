import { useTheme } from "next-themes";
import React from "react";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="px-6 lg:px-16 mt-7 mb-12 flex items-center justify-between relative">
      <div>
        <h1 className="font-semibold text-xl text-neutral-950 dark:text-slate-100">
          Priyangsu <span className="text-neutral-500">Banerjee.</span>
        </h1>
      </div>
      <ul className="hidden lg:flex items-center justify-center space-x-9 absolute left-1/2 -translate-x-1/2">
        <li>Home</li>
        <li>Work</li>
        <li>Process</li>
        <li>Make it happen</li>
      </ul>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle
      </button>
    </nav>
  );
}

export default Navbar;
