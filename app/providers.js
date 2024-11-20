// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import Layout from "./Components/Layout";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }) {
  return (
    <>
      <NextUIProvider>
        <Layout>{children}</Layout>
      </NextUIProvider>
    </>
  );
}
