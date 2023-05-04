import React, { useState, useEffect } from "react";
import "./DarkMode.css";
export default function DarkMode() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`DarkMode${theme}`}>
      <button onClick={toggleTheme} className="toggle">
        Dark Mode 🌙
      </button>
    </div>
  );
}
