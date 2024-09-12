import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider.jsx";

import styles from "./Header.module.css";

import { ThemeToggle } from "./ThemeToggle/ThemeToggle.jsx";
import { UserInfo } from "./UserInfo/UserInfo.jsx";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  const themeHeaderClass =
    theme === "light" ? styles.themeHeaderLight : styles.themeHeaderDark;

  return (
    <header className={`${styles.header} ${themeHeaderClass}`}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Header</p>
      </div>
      <ThemeToggle />
      <UserInfo />
    </header>
  );
};
