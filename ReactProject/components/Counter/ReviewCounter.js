import { Counter } from "./BaseCounter/Counter.jsx";
import "../../styles/reviewForm.css";

export const ReviewCounter = ({ rating, dispatch }) => {
  const handleIncrease = () => {
    dispatch({ type: "INCREASE_RATING" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE_RATING" });
  };

  const hanldeClear = () => {
    dispatch({ type: "CLEAR" });
  }

  return (
    <div className="review-counter-container">
      <Counter
        value={rating}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <button className="clear-button" onClick={hanldeClear}>
        Clear
      </button>
    </div>
  );
};
