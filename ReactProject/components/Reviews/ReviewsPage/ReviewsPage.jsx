import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";

import styles from "./ReviewsPage.module.css";

export const ReviewsPage = ({ reviews }) => {
  return (
    <>
      <h3 className={styles.title}>Отзывы:</h3>
      {reviews.map(({ id, user, text, rating }) => (
        <Review key={id} id={id} user={user} text={text} rating={rating} />
      ))}
      <ReviewForm />
    </>
  );
};
