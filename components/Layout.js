/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="h-screen overflow-auto flex lg:px-24 bg-darkPrimary">
      <div className="h-screen w-full bg-darkSecondary border-x border-darkPrimary overflow-auto relative">
        <Navbar />
        <div className="py-20">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
