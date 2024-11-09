import React from "react";

function Layout({ children }) {
  return (
    <div
      id="mainLayout"
      className="fixed scroll-smooth bg-white dark:bg-black inset-0 max-h-full h-full w-full overflow-y-auto overflow-x-hidden"
    >
      {children}
    </div>
  );
}

export default Layout;
