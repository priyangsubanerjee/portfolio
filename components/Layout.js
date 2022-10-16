import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="bg-black lg:flex lg:px-24 h-screen">
      <div className="w-full shrink-0 h-screen overflow-auto bg-dark pb-20 scrollbar-hide">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
