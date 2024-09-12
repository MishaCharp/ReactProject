import { useContext } from "react";
import styles from "./RestorauntTitle.module.css";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";

export const RestorauntTitle = ({ title }) => {
  const { theme } = useContext(ThemeContext);

  const themeStyle = theme === "light" ? styles.light : styles.dark;

  return <h2 className={`${styles.title} ${themeStyle}`}>{title}</h2>;
};
