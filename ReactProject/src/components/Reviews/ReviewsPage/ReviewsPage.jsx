import { useContext } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";

import { ThemeContext } from "../../ThemeProvider/ThemeProvider.jsx";
import { UserContext } from "../../UserProvider/UserProvider";

import styles from "./ReviewsPage.module.css";

export const ReviewsPage = ({ reviewsIds }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const themeStyle = theme === "light" ? styles.light : styles.dark;

  return (
    <>
      <h3 className={`${styles.title} ${themeStyle}`}>Отзывы:</h3>
      {reviewsIds.map((id) => (
        <Review key={id} reviewId={id}/>
      ))}
      {user && <ReviewForm />}
    </>
  );
};
