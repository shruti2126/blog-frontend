/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs } from "../../Functions/fetchBlogs";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchBlogsData = fetchBlogs;

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchBlogsData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBlogsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = [...state.data, ...action.payload];
      })
      .addCase(fetchBlogsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterBlogsByCategory } = blogsSlice.actions;

export default blogsSlice.reducer;

export const selectAllBlogs = (state) => state.blogs.data;

export const selectBlogById = (state, blogId) =>
  state.blogs.data.find((blog) => blog.id === blogId);
