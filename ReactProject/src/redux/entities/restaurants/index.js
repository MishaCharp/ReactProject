import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalized-mock.js";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map((item) => item.id),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsIds: (state) => state.ids,
  },
});

export const { selectRestaurantById, selectRestaurantsIds } =
  restaurantsSlice.selectors;
