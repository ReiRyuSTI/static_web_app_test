/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syuku: ["Yuji Syuku"],
        kosugi: ["Kosugi"],
      },
      animation: {
        "flip-out-hor-top":
          "flip-out-hor-top 3s cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards",
      },
      keyframes: {
        "flip-out-hor-top": {
          "0%": {
            transform: "rotateX(0)",
            opacity: "1",
            width: "100%",
          },
          "90%": {
            transform: "rotateX(70deg)",
            opacity: "0",
            width: "100%",
          },
          "100%": {
            transform: "rotateX(70deg)",
            opacity: "0",
            width: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
