import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "chinese-black": "#151515",
        "smoky-black": "#0E0E0E",
        "vivid-red": "#F70D19",
        "ku-crimson": "#E10013",
        "harvard-crimson": "#C00016",
      },
    },
  },
  plugins: [],
};
export default config;
