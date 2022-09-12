import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="h-screen w-screen overflow-auto bg-gray-100 px-32">
      <div className="w-full bg-white p-6 space-y-24">
        <Navbar />
        <div className="px-16">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
