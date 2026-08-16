import dotenv from "dotenv";

// Next.js only auto-loads .env from the project dir (apps/web).
// The repo has a single root .env, so load it explicitly here.
// Path is relative to the process cwd, which must be apps/web
// (npm scripts and the pm2 cwd both satisfy this).
dotenv.config({ path: "../../.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
