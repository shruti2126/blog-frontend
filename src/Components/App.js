/** @format */
import React from "react";
import Blog from "./Blog";
import { Routes, Route } from "react-router-dom"; 
import BlogPage from "./BlogPage";

function App() {
   <Routes>
     <Route path="/" element={<Blog />} />
     <Route path="/blog/:id" element={<BlogPage />} />
   </Routes>;
}

export default App;
