import Layout from "@/components/Layout";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import toast, { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress />
      <Component {...pageProps} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          // Define default options
          className: "",
          style: {
            background: "#fff",
            color: "#0d1117",
            zIndex: 1,
            borderRadius: "50px",
            fontSize: "14px",
            marginBottom: "10px",
          },
          duration: 5000,
        }}
      />
    </Layout>
  );
}
