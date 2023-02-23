/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="h-screen overflow-hidden flex lg:px-24 bg-darkPrimary">
      <div
        id="scrollContent"
        className="h-screen w-full bg-darkSecondary lg:border-x border-darkPrimary overflow-auto relative"
      >
        <Navbar />
        <div className="pt-10 lg:pt-20">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
