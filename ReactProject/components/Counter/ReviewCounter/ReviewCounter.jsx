import { Counter } from "../BaseCounter/Counter.jsx";
import styles from "./ReviewCounter.module.css";

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
    <div className={styles.container}>
      <Counter
        value={rating}  
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <button className={styles.btn} onClick={hanldeClear}>
        Clear
      </button>
    </div>
  );
};
