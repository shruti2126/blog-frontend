/** @format */

import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsData, selectAllBlogs } from "../Redux/Reducers/blogReducer";
import { useEffect, useState } from "react";
import BlogListCard from "../Components/BlogListCard";

const BlogsList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  const blogStatus = useSelector((state) => state.blogs.status);
  const selectedCategory = useSelector((state) => state.category.category);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    // Filter blogs based on the selected category
    const filtered = blogs.filter((blog) =>
      selectedCategory === "All"
        ? true
        : blog.category.includes(selectedCategory)
    );
    setFilteredBlogs(filtered);
  }, [selectedCategory, blogs]);

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatch(fetchBlogsData());
    }
  }, [blogStatus, dispatch]);

  return filteredBlogs.map((blog) => <BlogListCard blog={blog} />);
};

export default BlogsList;
