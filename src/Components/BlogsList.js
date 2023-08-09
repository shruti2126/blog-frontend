/** @format */

import { Box, Text, Button, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import blogPosts from "../Data/Mock";

const BlogsList = () => {
  const [blogs, setBlogs] = useState(blogPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:8080/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const API_KEY = api_key;
        // const url = "http://localhost:1337/api/blog-posts?populate=*";
        // const headers = {
        //   Authorization: `Bearer ${API_KEY}`,
        // };
        const response = await axios.get(
          "http://localhost:8080/blog-posts?populate=*"
          // { headers }
        );
        const data = response.data.data;
        console.log(`data = ${data}`);
        setBlogs(
          data.map((blog) => ({
            id: blog.id,
            title: blog.attributes.title,
            imageUrl:
              "http://localhost:1337" +
                blog.attributes.themeImage.data.attributes.url || "", // Access imageUrl through blog.attributes.themeImage.data.attributes.url
            imageAlt:
              blog.attributes.themeImage.data.attributes.alternativeText || "", // Access imageAlt through blog.attributes.themeImage.data.attributes.alternativeText
            description: blog.attributes.description,
            content: blog.attributes.content,
          }))
        );

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
  return blogs.map((blog) => (
    <Box
      key={blog.id}
      maxW="sm"
      borderWidth={"1px"}
      borderRadius={"lg"}
      borderColor={"black"}
      overflow="hidden"
      m={5}
      p={4}
      cursor="pointer"
      transition="box-shadow 0.2s"
      _hover={{ boxShadow: "lg" }}
      boxShadow="md"
      bg="white"
    >
      <Box>
        <Image
          src={blog.imageUrl}
          alt={blog.imageAlt}
          objectFit="cover"
          borderRadius="lg"
          h="200px"
          w="100%"
        />
      </Box>
      <Box p={4}>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
          {blog.title}
        </Text>
        <Text color="gray.600" fontSize="2xm" mb={4}>
          {blog.description}
        </Text>
        <Text color="gray.600" fontSize="md" mb={4}>
          {blog.content}
        </Text>
        <Button size="sm" colorScheme="twitter">
          <Link to={`/blog/${blog.id}`}>Read More</Link>{" "}
          {/* Use Link instead of anchor tag */}
        </Button>
      </Box>
    </Box>
  ));
};

export default BlogsList;
