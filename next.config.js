/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    async headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET, POST, DELETE, OPTIONS" },
            { key: "Access-Control-Allow-Headers", value: "Content-Type" },
          ],
        },
      ];
    },
  };

export default config;
