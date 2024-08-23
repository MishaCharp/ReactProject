import { Counter } from "../Counter/BaseCounter/Counter.jsx";
import "../../styles/reviewForm.css";

export const ReviewCounter = ({ rating, onRatingChange, onClear }) => {
  const handleIncrease = () => {
    if (rating < 5) {
      onRatingChange(rating + 1);
    }
  };

  const handleDecrease = () => {
    if (rating > 1) {
      onRatingChange(rating - 1);
    }
  };

  return (
    <div className="review-counter-container">
      <Counter
        value={rating}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <button className="clear-button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
};
