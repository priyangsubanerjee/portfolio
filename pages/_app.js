import Layout from "@/components/Layout";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
    </Layout>
  );
}
