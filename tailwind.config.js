/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        whiteColor: "#FFFFFF",
        menuIcon: "#A4A4A4",
        heroColor: "#FFAE00",
        introColor: "#F2F2F2",
        wholeBg: "#222222",
        viewProj: "#D9D9D9",
        borderColor: "#494949",
        portBorder: "#2C2C2C",
        marqueeText: "#818181",
        switchBg: "#403E3E",
        teamBg: "#4A4949",
        teamgrad: "#ffc852",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        custom: "100vw 100vh",
        "100%": "100%",
        "38%": "38%",
        "30%": "30%",
        16: "4rem",
      },
      backgroundPosition: {
        moveup: "0 -133px",
        moveupfooter: "0 -533px",
      },
      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      animation: {
        "spinSlow": "spinSlow 10s linear infinite",
      },
    },
  },
  plugins: [],
};
