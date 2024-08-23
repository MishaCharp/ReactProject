import { ReviewCounter } from "../Counter/ReviewCounter";
import "../../styles/reviewForm.css";
import { useReducer } from "react";

const reviewReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "CLEAR":
      return { name: "", text: "", rating: 1 };
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [state, dispatch] = useReducer(reviewReducer, {
    name: "",
    text: "",
    rating: 1,
  });

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleTextChange = (e) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="review-container">
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
          onRatingChange={(rating) => dispatch({ type: 'SET_RATING', payload: rating })}
          onClear={handleClear}
        />
      </div>
    </div>
  );
};
