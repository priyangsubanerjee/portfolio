import { Button, Input, Textarea } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Message() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (name == "" || contact == "" || message == "") {
      alert("Please fill all the fields");
      setIsLoading(false);
      return;
    }

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, contact, message }),
    });
    if (res.status === 200) {
      setSubmitted(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Drop me a line.</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/db9kd4qbi/image/upload/v1700054426/Personal/IMG_5D022AA3C935-1_psqtcn.jpg"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/db9kd4qbi/image/upload/v1700054426/Personal/IMG_5D022AA3C935-1_psqtcn.jpg"
          type="image/x-icon"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://res.cloudinary.com/db9kd4qbi/image/upload/v1700054426/Personal/IMG_5D022AA3C935-1_psqtcn.jpg"
        />
        <meta
          name="description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        />
        <meta
          name="keywords"
          content="Freelance developer India,Full-stack developer India,Web developer India,Mobile app developer India,React developer India,PHP developer India,Python developer India,Java developer India,WordPress developer India,E-commerce development India,API development India,Cloud computing India,Software development consultant India,Startup development India,MVP development India,Bug fixing India,Website maintenance India,SEO optimization India,Digital marketing expertise India,Remote developer India,Priyangsu Banerjee developer Durgapur,Durgapur freelance developer,West Bengal entrepreneur,Indian tech talent,Reliable developer India,Passionate entrepreneur India,Creative problem solver India,Client-focused developer India,Results-oriented developer India,Experienced developer India,Highly motivated developer India,Award-winning developer India,Top freelancer India,Tech leader India,Emerging entrepreneur India,Fintech developer India,Healthcare app developer India,E-learning platform developer India,Travel app developer India,Saas development India,Blockchain developer India,AI & ML developer India,Data science expertise India,IoT development India,Cybersecurity expertise India,Affordable developer India,Quick turnaround time India,Open communication India,Long-term partnership India,Free consultation India,Satisfaction guaranteed India,24/7 support India,English speaking developer India,Remote work experience India,Team player India,Adaptable and flexible India,Continuous learning India,Positive attitude India,Strong work ethic India,Client testimonials India,Case studies India,Blog posts India,Active on social media India,Engaging content India,Thought leadership India,Industry events India,Networking opportunities India,Building relationships India,Giving back to the community India,Social responsibility India,Priyangsu Banerjee portfolio,Priyangsu Banerjee LinkedIn,Priyangsu Banerjee Upwork,Priyangsu Banerjee Fiverr,Hire Priyangsu Banerjee,Contact Priyangsu Banerjee,Get a quote from Priyangsu Banerjee,Work with Priyangsu Banerjee,Let Priyangsu Banerjee help you,Priyangsu Banerjee, the developer you need, Fullstack developer, Web development, Portfolio websites, Ecommerce development, Full stack applications, West Bengal developer, Odisha developer, Web design, Responsive web development, Custom web solutions, Front-end development, Back-end development, Mobile-friendly websites, UI/UX design, Website optimization, Cross-platform development, Web programming, Website maintenance, Database management, Software development East India, Code optimization, Scalable web solutions, Fullstack services, Tech stack expertise, Professional web developer, CMS integration, West Bengal ecommerce, Odisha portfolio websites, Application development, Innovative web solutions"
        />
        <meta name="author" content="Priyangsu Banerjee" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />

        <meta
          property="twitter:card"
          content="https://res.cloudinary.com/db9kd4qbi/image/upload/v1699945699/Personal/Priyangsu_Banerjee_ew1cz3.png"
        ></meta>
        <meta property="twitter:title" content="Drop me a line."></meta>
        <meta
          property="twitter:description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/db9kd4qbi/image/upload/v1699945699/Personal/Priyangsu_Banerjee_ew1cz3.png"
        ></meta>
        <meta property="og:title" content="Drop me a line."></meta>
        <meta
          property="og:description"
          content="Priyangsu Banerjee is a full stack developer and entrepreneur based in India. He is currently building VBC, where they develop technologies that empower regular people to explore tech on their own terms."
        />
        <meta property="og:url" content="https://priyangsu.dev"></meta>
      </Head>
      <div className="pt-12">
        <div className="px-5">
          {submitted == false ? (
            <>
              <h1 className="text-3xl font-semibold text-center">
                Get in touch
              </h1>
              <p className="text-center text-sm mt-2 text-neutral-600 dark:text-neutral-400 leading-7">
                I&apos;m currently accepting new projects, would love to hear
                about yours.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                className="max-w-2xl mx-auto mt-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Input
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    label="Email or phone"
                  />
                </div>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  label="Message"
                  rows="10"
                  className="mt-3"
                />

                <div className="mt-10 flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Wanna schedule a meet ?
                  </a>
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    className="bg-black text-sm text-white dark:bg-white dark:text-black"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-semibold text-center">
                Request submitted
              </h1>
              <p className="text-center text-sm mt-2 text-neutral-600 dark:text-neutral-400 leading-7">
                Will get back to you soon.
              </p>
              <div className="flex items-center justify-center mt-8">
                <Button
                  isLoading={isLoading}
                  onPress={() => router.push("/")}
                  className="bg-black text-white dark:bg-white dark:text-black"
                >
                  Take me home
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Message;
