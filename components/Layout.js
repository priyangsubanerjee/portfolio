import React from "react";

function Layout({ children }) {
  return (
    <main className="fixed bg-white dark:bg-black inset-0 max-h-full h-full w-full overflow-y-auto overflow-x-hidden">
      {children}
    </main>
  );
}

export default Layout;
