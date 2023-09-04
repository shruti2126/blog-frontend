/** @format */

import { React } from "react";
import { Routes, Route } from "react-router-dom";
import SingleBlogPage from "./Pages/SingleBlogPage";
import Home from "./Pages/Home";

function App() {
  return (
    
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/blog/:id" element={<SingleBlogPage />} />
    </Routes>
    
  );
}

export default App;
