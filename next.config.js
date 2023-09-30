/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM(nextConfig);
