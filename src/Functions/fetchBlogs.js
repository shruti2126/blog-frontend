/** @format */

// Fetch blogs based on category
import axios from "axios";
async function fetchBlogs(category) {
  let response;
  if (category === "All") {
    response = await axios.get("http://localhost:8080/blogs", {
      params: { populate: "*" },
    });
  } else {
    response = await axios.get("http://localhost:8080/blogsByCategory", {
      params: { category: category, populate: "*" },
    });
  }
  const data = response.data.data;
  return [data.map((blog) => ({
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
  }))];
}
export default fetchBlogs;
