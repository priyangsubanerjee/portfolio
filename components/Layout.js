import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div className="bg-black lg:flex lg:px-24 h-screen">
      <div className="w-full shrink-0 h-screen overflow-auto lg:border-x lg:border-zinc-700 bg-dark scrollbar-hide">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
