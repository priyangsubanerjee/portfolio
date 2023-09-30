import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
