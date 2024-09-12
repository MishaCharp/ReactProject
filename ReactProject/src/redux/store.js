import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants";
import { usersSlice } from "./entities/users";
import { reviewsSlice } from "./entities/reviews";
import { dishesSlice } from "./entities/dishes";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
  },
});
