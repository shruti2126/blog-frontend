/** @format */

import { Box, Text, Button, Image, Badge, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsData, selectAllBlogs } from "../Redux/Reducers/blogReducer";
import { useEffect } from "react";

const BlogsList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  console.log("all blogs  in blog list = ", blogs);
  const blogStatus = useSelector((state) => state.blogs.status);
  const selectedCategory = useSelector((state) => state.category);
  console.log("selected category = ", selectedCategory);
  const filteredBlogs = blogs.filter(
    (blog) => blog.category === selectedCategory
  );
  useEffect(() => {
    if (blogStatus === "idle") {
      console.log("action is dispatched");
      dispatch(fetchBlogsData());
      console.log("status after dispatch = ", blogStatus);
    }
  }, [blogStatus, dispatch]);

  const navigate = useNavigate();
  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  console.log("filtered blogs in blogList = ", filteredBlogs);
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
        <Stack direction="column">
          <Button
            onClick={() => handleBlogClick(blog.id)}
            size="sm"
            colorScheme="twitter"
            mb={4}
          >
            Read More
          </Button>
          <Stack direction="row">
                {blog.category.map((category, index) => (
                  <Badge colorScheme="whatsapp" key={index}>
                    {category}
                  </Badge>
                ))}
              </Stack>
        </Stack>
      </Box>
    </Box>
  ));
};

export default BlogsList;
