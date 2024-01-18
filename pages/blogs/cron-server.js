import Head from "next/head";
import { useRouter } from "next/router";
import React, { useLayoutEffect } from "react";

function CronServer() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.replace(
      "https://priyangsubanerjee.notion.site/Cron-job-using-Esp8266-0b64cbab4a7444a397fd81121a3d6550"
    );
  }, []);
  return (
    <div>
      <Head>
        <title>Cron Server using ESP8266</title>
        <meta
          name="description"
          content="Schedule time based triggers to run automations using ESP8266"
        />
        <meta name="author" content="Priyangsu Banerjee" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta property="twitter:card" content="/cron-server.png"></meta>
        <meta
          property="twitter:title"
          content="Cron Server using ESP8266"
        ></meta>
        <meta
          property="twitter:description"
          content="Schedule time based triggers to run automations using ESP8266"
        ></meta>
        <meta property="og:image" content="/cron-server.png"></meta>
        <meta property="og:title" content="Cron Server using ESP8266"></meta>
        <meta
          property="og:description"
          content="Schedule time based triggers to run automations using ESP8266"
        />
        <meta
          property="og:url"
          content="https://priyangsu.dev/blogs/cron-server"
        ></meta>
      </Head>
      <div className="text-center py-24 animate-pulse">
        Redirecting to the blog ...
      </div>
    </div>
  );
}

export default CronServer;
