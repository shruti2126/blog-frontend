/** @format */

import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBlogContext } from "./BlogProvider";

const BlogsList = () => {
  const { blogs } = useBlogContext();
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
          <Link to={`/blog/${blog.id}`} >Read More</Link>{" "}
          {/* Use Link instead of anchor tag */}
        </Button>
      </Box>
    </Box>
  ));
};

export default BlogsList;
