/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="h-screen lg:overflow-hidden flex lg:px-24 bg-darkPrimary">
      <div
        id="scrollContent"
        className="h-fit lg:h-screen w-full bg-darkSecondary lg:border-x border-darkPrimary lg:overflow-auto relative"
      >
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
