import { ReviewCounter } from "../../Counter/ReviewCounter/ReviewCounter.jsx";
import { useReviewForm } from "./use-review-form.jsx";

import styles from "./ReviewForm.module.css";

export const ReviewForm = () => {
  const [state, dispatch] = useReviewForm();

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleTextChange = (e) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h2>Напишите свой отзыв</h2>
      <div className={styles.form}>
        <label>Name</label>
        <input
          type="text"
          className={styles.input}
          value={state.name}
          onChange={handleNameChange}
        />
      </div>
      <div className={styles.form}>
        <label>Text</label>
        <input
          type="text"
          className={styles.input}
          value={state.text}
          onChange={handleTextChange}
        />
      </div>
      <div className={styles.form}>
        <ReviewCounter rating={state.rating} dispatch={dispatch} />
      </div>
    </div>
  );
};
