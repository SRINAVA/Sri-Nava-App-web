import React, { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../../lib/context/ThemeContext/theme";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

function ThemeToggle() {
  const [{ isDark, theme }, toggleTheme] = useContext(ThemeContext);

  //console.log(theme);

  return (
    <div onClick={toggleTheme}>
      {isDark ? <BsToggleOff size={20} /> : <BsToggleOn size={20} />}
    </div>
  );
}

export default ThemeToggle;
