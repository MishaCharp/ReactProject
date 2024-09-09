import { useContext } from "react";
import styles from "./Footer.module.css";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

export const Footer = () => {

  const { theme } = useContext(ThemeContext);

  const themeFooterClass = theme === "light" ? styles.themeFooterLight : styles.themeFooterDark;

  return (
    <footer className={`${styles.footer} ${themeFooterClass}`}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Footer</p>
      </div>
    </footer>
  );
};
