import { useContext } from "react";
import styles from "./Review.module.css";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../../redux/entities/reviews";
import { selectUserById } from "../../../redux/entities/users";

export const Review = ({ reviewId }) => {
  const { theme } = useContext(ThemeContext);

  const isLight = theme === "light";

  const review = useSelector((state) =>
    selectReviewById(state, reviewId)
  );
  
  const user = useSelector((state) => selectUserById(state, review.userId))


  const themeStyleUser = isLight ? styles.userLight : styles.userDark;
  const themeStyleText = isLight ? styles.textLight : styles.textDark;

  return (
    <div className={styles.review}>
      <span className={`${styles.user} ${themeStyleUser}`}>{user.name}</span>
      <span className={`${styles.text} ${themeStyleText}`}>{review.text}</span>
      <span className={styles.rating}>{review.rating}</span>
    </div>
  );
};
