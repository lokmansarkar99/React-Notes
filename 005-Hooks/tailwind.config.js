// tailwind.config.js
export default {
    content: [
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1e40af", // blue
          secondary: "#f59e0b",  // yellow
          danger: "#dc2626",  // red
        },
      },
    },
    plugins: [],
  };
  