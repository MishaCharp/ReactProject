import { useContext } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";

import { ThemeContext } from "../../ThemeProvider/ThemeProvider.jsx";
import { UserContext } from "../../UserProvider/UserProvider";

import styles from "./ReviewsPage.module.css";

export const ReviewsPage = ({ reviews }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const themeStyle = theme === "light" ? styles.light : styles.dark;

  return (
    <>
      <h3 className={`${styles.title} ${themeStyle}`}>Отзывы:</h3>
      {reviews.map(({ id, user, text, rating }) => (
        <Review key={id} id={id} user={user} text={text} rating={rating} />
      ))}
      {user && <ReviewForm />}
    </>
  );
};
