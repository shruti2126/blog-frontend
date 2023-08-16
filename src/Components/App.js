/** @format */
import React from "react";
import Blog from "./Blog";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./BlogPage";
import { BlogProvider } from "./BlogProvider";
import { useBlogContext } from "../Hooks/useBlogContext";

function App() {
  return (
    <BlogProvider>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage blog={useBlogContext}/>} />
      </Routes>
    </BlogProvider>
  );
}

export default App;
