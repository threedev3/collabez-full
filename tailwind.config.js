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
        anotherColor: "#ffd988",
        introColor: "#F2F2F2",
        wholeBg: "#222222",
        viewProj: "#D9D9D9",
        borderColor: "#494949",
        portBorder: "#2C2C2C",
        marqueeText: "#818181",
        switchBg: "#403E3E",
        teamBg: "#4A4949",
        teamgrad: "#ffc852",
        serviceText: "#A9AFC3",
        serviceRound: "#282930",
        serviceCardOneFrom: "#1b1d25",
        serviceCardOneTo: "#1b1d2500",
        serviceCardTwoFrom: "#080A12",
        serviceCardTwoTo: "#080a1200",
        tabsColor: "#111319",
        tabsText: "#88898c",
        priceBg: "#493b1c",
        testStart: "#5901B1",
        testEnd: "#FF73B6",
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
        spinSlow: "spinSlow 10s linear infinite",
      },
      // backgroundImage: {
      //   "custom-radial":
      //     "radial-gradient(circle, #0F0F0F 100%, rgba(21,21,21) 100%)",
      // },
    },
  },
  plugins: [],
};
