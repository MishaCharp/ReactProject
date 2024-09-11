import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normalized-mock.js";

const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedReviews.map((item) => item.id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviewsIds: (state) => state.ids,
  },
});

export const { selectReviewById, selectReviewsIds } = reviewsSlice.selectors;
