/** @format */

import { createContext, useState, useEffect, useContext } from "react";
import blogPosts from "../Data/Mock";
import axios from "axios";
import { useSelector } from "react-redux";
// Create a context
const BlogContext = createContext();

// Create a provider component
export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState(blogPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectedCategory = useSelector((state) => state.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response;
        if (selectedCategory === "All") {
          response = await axios.get("http://localhost:8080/blogs", {
            params: { populate: "*" },
          });
        } else {
          response = await axios.get("http://localhost:8080/blogsByCategory", {
            params: { category: selectedCategory, populate: "*" },
          });
        }
        const data = response.data.data;
        setBlogs(
          data.map((blog) => ({
            id: blog.id,
            title: blog.attributes.title,
            imageUrl:
              "http://localhost:1337" +
                blog.attributes.themeImage.data.attributes.url || "",
            imageAlt:
              blog.attributes.themeImage.data.attributes.alternativeText || "",
            description: blog.attributes.description,
            content: blog.attributes.content,
            updatedAt: blog.attributes.updatedAt,
            category: blog.attributes.category,
          }))
        );
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedCategory]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p fontSize="10px" color="white">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
  );
}

export function useBlogContext() {
  return useContext(BlogContext);
}
