import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/favicon.png"></link>
          <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
          <meta name="theme-color" content="#1b1b1b" />
          <meta charset="UTF-8" />

          <meta
            name="description"
            content="Full stack developer and UI designer."
          />
          <meta
            name="keywords"
            content="sites, web, immovation, design, programmer, priyangsu, front-end, designer, ui, priyangsu banerjee, freelancer, portfolio, website, priyangsu banerjee, android, ios, robotics"
          />
          <meta name="author" content="Priyangsu Banerjee" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="canonical" href="https://priyangsubanerjee.vercel.app/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
