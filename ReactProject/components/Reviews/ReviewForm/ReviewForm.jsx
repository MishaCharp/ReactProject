import { ReviewCounter } from "../../Counter/ReviewCounter.jsx";
import "../../../styles/reviewForm.css";
import { useReviewForm } from "./use-review-form.jsx";

export const ReviewForm = () => {
  const [state, dispatch] = useReviewForm();

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleTextChange = (e) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };

  return (
    <div className="review-container">
      <h2>Напишите свой отзыв</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-input"
          value={state.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <label>Text</label>
        <input
          type="text"
          className="form-input"
          value={state.text}
          onChange={handleTextChange}
        />
      </div>
      <div className="form-group">
        <ReviewCounter
          rating={state.rating}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};
