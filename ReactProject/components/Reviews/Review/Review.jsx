import styles from "./Review.module.css";

export const Review = ({ id, user, text, rating }) => {
  return (
    <div className={styles.review}>
      <span className={styles.user}>{user}</span>
      <span className={styles.text}>{text}</span>
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};
