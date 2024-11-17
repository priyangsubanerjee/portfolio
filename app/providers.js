// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import Layout from "./Components/Layout";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }) {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <NextUIProvider>
      <Layout>{children}</Layout>
    </NextUIProvider>
  );
}
