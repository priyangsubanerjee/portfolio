import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <main
      id="mainLayout"
      className="fixed bg-white dark:bg-black inset-0 max-h-full h-full w-full overflow-y-auto overflow-x-hidden"
    >
      <Navbar />

      {children}
    </main>
  );
}

export default Layout;
