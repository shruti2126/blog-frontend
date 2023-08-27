/** @format */

import { React} from "react";
import { Routes, Route } from "react-router-dom";
import SingleBlogPage from "./SingleBlogPage";
import Blog from "./Blog";

function App() {
  return (
    //<BlogProvider>
    <Routes>
      <Route path="*" element={<Blog />} />
      <Route path="/blog/:id" element={<SingleBlogPage />} />
    </Routes>
    //</BlogProvider>
  );
}

export default App;
