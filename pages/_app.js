import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { NextUIProvider } from "@nextui-org/react";
gsap.registerPlugin(CSSPlugin);

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextUIProvider>
  );
}
