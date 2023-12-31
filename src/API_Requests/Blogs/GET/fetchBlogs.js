/** @format */

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get("http://localhost:8080/fetchAllBlogs");
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
    // comments: blog.attributes.comments.data,
    // likes: blog.attributes.likes.data,
  }));
  //console.log("fetched blog data in thunk = ", data);
  return data;
});
