import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme} className="p-2 text-xl">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default Themetoggle;
