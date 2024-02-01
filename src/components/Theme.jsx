import { useEffect } from "react";
import { useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const getThemeStorage = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  };

  useEffect(() => {
    getThemeStorage();
    if (theme === "dark") {
      document.documentElement.classList.toggle("dark", true);
    } else {
      document.documentElement.classList.toggle("dark", false);
    }
  }, [theme]);

  return (
    <button
      aria-label="switcher"
      onClick={toggleTheme}
      className="text-2xl p-2 rounded-full text-black dark:text-white hover:text-green-500 transition-all"
    >
      {theme === "light" ? <IoIosMoon /> : <IoIosSunny />}
    </button>
  );
};
export default Theme;
