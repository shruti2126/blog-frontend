/** @format */

import { React } from "react";
import { Routes, Route } from "react-router-dom";
import SingleBlogPage from "./SingleBlogPage";
import Home from "./Home";

function App() {
  return (
    //<BlogProvider>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/blog/:id" element={<SingleBlogPage />} />
    </Routes>
    //</BlogProvider>
  );
}

export default App;
