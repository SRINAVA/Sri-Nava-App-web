import { createContext, useState, useEffect } from "react";
import { themes } from "../themeStyles/themes";

// const themes = {
//   dark: {
//     backgroundColor: "#061027",
//     color: "white",
//     heading: "red",
//   },
//   // singlePdtdark: {
//   //   backgroundColor: "red",
//   // },
//   // singlePdtTitleDark: {
//   //   color: "black",
//   // },
//   light: {
//     backgroundColor: "#EFF2F9",

//     color: "black",
//     heading: "black",
//   },

//   tabdark: {
//     backgroundColor: "#061027",
//     borderRight: ".5px gray solid",
//     borderLeft: ".5px gray solid",
//     color: "#fff",
//     heading: "black",
//   },

//   tabLight: {
//     backgroundColor: "#EFF2F9",
//     color: "indigo",
//     heading: "red",
//     borderRight: "1px gray solid",
//     borderLeft: ".5px gray solid",
//   },
// };

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  const theme = isDark ? themes.dark : themes.light;
  const tabsTheme = isDark ? themes.tabdark : themes.tabLight;

  const pdtTheme = isDark ? themes.singlePdtdark : themes.light;
  const pdtTitleTheme = isDark ? themes.singlePdtTitleDark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider
      value={[
        { theme, isDark, pdtTheme, pdtTitleTheme, tabsTheme },
        toggleTheme,
      ]}
    >
      {children}
    </ThemeContext.Provider>
  );
};
