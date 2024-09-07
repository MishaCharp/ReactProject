import { useContext } from "react";
import styles from "./Review.module.css";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";

export const Review = ({ id, user, text, rating }) => {
  const { theme } = useContext(ThemeContext);

  const isLight = theme === "light";

  const themeStyleUser = isLight ? styles.userLight : styles.userDark;
  const themeStyleText = isLight ? styles.textLight : styles.textDark;

  return (
    <div className={styles.review}>
      <span className={`${styles.user} ${themeStyleUser}`}>{user}</span>
      <span className={`${styles.text} ${themeStyleText}`}>{text}</span>
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};
