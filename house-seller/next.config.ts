import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Tillad billeder fra res.cloudinary.com
  },
};

module.exports = nextConfig;

export default nextConfig;
