/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchCommentsByPostId",
  async (postId) => {
    console.log("postId passed in = ", postId);
    const response = await axios.get(
      `http://localhost:8080/comments/fetchByPostId?postId=${postId}`
    );
    const comments = response.data.data.map((comment) => ({
      id: comment.id,
      postId: comment.attributes.postId.data.id,
      content: comment.attributes.content,
      author: comment.attributes.author,
      // Add any other relevant fields you need
    }));
    //console.log("comments data in thunk = ", comments);
    return comments;
  }
);
