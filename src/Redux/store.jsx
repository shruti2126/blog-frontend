/** @format */

import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./Reducers/blogReducer";
import categoryReducer from "./Reducers/categoryReducer";
import commentsReducer from "./Reducers/commentsReducer";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    category: categoryReducer,
    comments: commentsReducer,
  },
});

export default store;
