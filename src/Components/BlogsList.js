/** @format */
import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Image,
  Badge,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../Hooks/useBlogContext";

const BlogsList = () => {
  const { blogs } = useBlogContext();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = blogs.flatMap((blog) => blog.category);

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

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
                <Badge colorScheme={selectedCategory}>{selectedCategory}</Badge>
                <Button
                  onClick={() => handleBlogClick(blog.id)}
                  size="sm"
                  colorScheme="twitter"
                >
                  Read More
                </Button>
              </Box>
            </Box>
          ));
};

export default BlogsList;
