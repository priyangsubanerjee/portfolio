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
      <div className="pt-12">
        <Head>
          <title>Get in touch</title>
        </Head>
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
