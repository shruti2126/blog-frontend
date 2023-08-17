/** @format */

import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Reducers/categoryReducer";

export const store = configureStore({
  reducer: categoryReducer,
});
