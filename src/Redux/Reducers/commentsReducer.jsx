/** @format */

// commentsReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchCommentsByPostId } from "../../API_Requests/Comments/GET/fetchCommentsByPostId";

export const fetchCommentsByPost = fetchCommentsByPostId;

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setComments: (state, action) => {
      state.data = action.payload
    },
    addComment: (state, action) => {
      // state.push(action.payload);
      state.data = [...state.data, action.payload];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCommentsByPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(fetchCommentsByPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setComments, addComment } = commentsSlice.actions;

export default commentsSlice.reducer;

export const selectAllComments = (state) => state.comments.data;
