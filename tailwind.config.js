/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [/data-theme$/],
    },
  },
  theme: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          // ** primary is purple
          primary: "#AF32F0" /* Primary color */,
          "primary-focus": "#8462f4" /* Primary color - focused */,
          "primary-content": "#ffffff",
          //** for now no */
          secondary: "#f6d860" /* Secondary color */,
          "secondary-focus": "#f3cc30" /* Secondary color - focused */,
          "secondary-content": "#ffffff",

          accent: "#37cdbe" /* Accent color */,
          "accent-focus": "#2aa79b" /* Accent color - focused */,
          "accent-content": "#ffffff",

          neutral: "#252833" /* Neutral color */,
          "neutral-focus": "#20232C" /* Neutral color - focused */,
          "neutral-content": "#ffffff",

          "base-100": "#141419",
          "base-200": "#1E2026" ,
          "base-300": "#303030" ,
          "base-content": "#ffffff",

          info: "#2094f3" /* Info */,
          success: "#009485" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
