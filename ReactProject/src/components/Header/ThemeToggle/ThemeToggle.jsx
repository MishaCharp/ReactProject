import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider.jsx";
import styles from "../../Header/Header.module.css";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    const themeBtnClass = theme === "light" ? styles.themeBtnLight : styles.themeBtnDark;
  
    return (
      <button onClick={toggleTheme} className={`${styles.themeBtn} ${themeBtnClass}`}>
        {theme === "light" ? "Light Theme" : "Dark Theme"}
      </button>
    );
  };