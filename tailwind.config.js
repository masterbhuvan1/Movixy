/** @type {import('tailwindcss').Config} */
export default {
  //content: ["* "],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files
  ],
  theme: {
    extend: {},
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "30px",
      full: "9999px",
      large: "12px",
    },
    // transitionDuration:{
    //   200px,

    // }
  },

  plugins: [],
};
