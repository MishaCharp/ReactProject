import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";

export const ReviewsPage = ({ reviews }) => {
  return (
    <>
      <h3 className="restourant-card-reviews-title-h3">Отзывы:</h3>
      {reviews.map(({ id, user, text, rating }) => (
        <Review id={id} user={user} text={text} rating={rating} />
      ))}
      <ReviewForm />
    </>
  );
};
