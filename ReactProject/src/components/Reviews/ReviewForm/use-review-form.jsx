import { useReducer } from "react";

const reviewReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "INCREASE_RATING":
      return { ...state, rating: state.rating < 5 ? state.rating + 1 : state.rating };
    case "DECREASE_RATING":
      return { ...state, rating: state.rating > 1 ? state.rating - 1 : state.rating };
    case "CLEAR":
      return { name: "", text: "", rating: 1 };
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [state, dispatch] = useReducer(reviewReducer, {
    name: "",
    text: "",
    rating: 1,
  });

  return [state, dispatch];
};