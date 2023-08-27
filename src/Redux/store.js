/** @format */

import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./Reducers/blogReducer";
import categoryReducer from "./Reducers/categoryReducer";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    category: categoryReducer,
  },
});

export default store;
