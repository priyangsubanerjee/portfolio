import React from "react";

function Layout({ children }) {
  return (
    <main className="fixed inset-0 max-h-full h-full w-full overflow-auto">
      {children}
    </main>
  );
}

export default Layout;
