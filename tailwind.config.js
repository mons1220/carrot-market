module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media", //class <-이거는 부모 className에 dark를 넣어주면 활성화됨 (_app.tsx component를 div로 감싸고 className에 dark넣어주면 모든 게 다 적용되니까 가장 편한 방법)
  plugins: [require("@tailwindcss/forms")],
};
