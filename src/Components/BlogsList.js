/** @format */

import { Box, Text, Button, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios, { toFormData } from "axios";
import blogPosts from "../Data/Mock";

const BlogsList = () => {
  const [blogs, setBlogs] = useState(blogPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api_key =
    "66c836cf992a8b0a936c1f8fdecc205bd56ab95313f60000921a13ad596f2879e7ede3d05ec19d1389aee05870746f2a980765f96305438b8598de4e4d579792e7de36d6244ffd8f2ccc8d145562d214f6db2a30db6013a0f6e6ef096f0e84b1941e6ed2c9246149516f15cc3990a3e52110576845cf03c0d9dc0d8417c9f459";
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const API_KEY = api_key;
        const url = "http://localhost:1337/api/blog-posts?populate=*";
        const headers = {
          Authorization: `Bearer ${API_KEY}`,
        };
        const response = await axios.get(url, { headers });
        const data = response.data.data;
        console.log(data);
        setBlogs(
          data.map((blog) => ({
            id: blog.id,
            title: blog.attributes.title,
            imageUrl:
              "http://localhost:1337" +
                blog.attributes.themeImage.data.attributes.url || "", // Access imageUrl through blog.attributes.themeImage.data.attributes.url
            imageAlt:
              blog.attributes.themeImage.data.attributes.alternativeText || "", // Access imageAlt through blog.attributes.themeImage.data.attributes.alternativeText
            content: blog.attributes.description,
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
      <div background-color="white" height="100%" width="100%">
        Error: {error.message}
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
        <Text color="gray.600" fontSize="md" mb={4}>
          {blog.content}
        </Text>
        <Button size="sm" colorScheme="twitter">
          Read More
        </Button>
      </Box>
    </Box>
  ));
};

export default BlogsList;
