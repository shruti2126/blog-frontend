/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchBlogsData = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get("http://localhost:8080/blogs", {
    params: { populate: "*" },
  });
  const data = response.data.data.map((blog) => ({
    id: blog.id,
    title: blog.attributes.title,
    imageUrl:
      "http://localhost:1337" +
        blog.attributes.themeImage.data.attributes.url || "",
    imageAlt: blog.attributes.themeImage.data.attributes.alternativeText || "",
    description: blog.attributes.description,
    content: blog.attributes.content,
    updatedAt: blog.attributes.updatedAt,
    category: blog.attributes.category,
  }));
  return data;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    filterBlogsByCategory: (state, action) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBlogsData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBlogsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("to concat = ", action.payload);
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
