/** @format */

import React, { useEffect } from "react"; // Include useEffect in the import statement
import {
  Box,
  Text,
  Divider,
  Link,
  Flex,
  Badge,
  IconButton,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom/dist";
import { FiHeart, FiBookmark, FiShare2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsData, selectAllBlogs } from "../Redux/Reducers/blogReducer";
import Comments from "./Comments";

const SingleBlogPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogs = useSelector(selectAllBlogs);
  const blogStatus = useSelector((state) => state.blogs.status);
  const selectedBlog = blogs.find((blog) => blog.id === parseInt(id));

  useEffect(() => {
    if (blogStatus === "idle") {
      dispatch(fetchBlogsData());
    }
  }, [blogStatus, dispatch]);

  if (!selectedBlog) {
    return <div>Loading...</div>; 
  }
  return (
    <Box maxW="800px" m="0 auto" p="20px">
      <Text fontSize="5xl" fontWeight="semibold" mb="10px" textAlign="center">
        {selectedBlog.title}
      </Text>
      <Image
        src={selectedBlog.imageUrl}
        alt={selectedBlog.imageAlt}
        objectFit="cover"
        borderRadius="lg"
        mb="20px"
        width="80%"
        height="500px"
        mx="auto"
      />
      <Flex justifyContent="space-between" alignItems="center" mb="10px">
        <Box>
          <Text fontSize="md" color="gray.600" mb={2}>
            {selectedBlog.description}
          </Text>
          <Text fontSize="md" color="gray.500">
            Updated At: {new Date(selectedBlog.updatedAt).toLocaleDateString()}
          </Text>
        </Box>
      </Flex>
      <Divider my="20px" />
      <Text fontSize="lg">{selectedBlog.content}</Text>
      <Divider my="20px" />
      <Comments selectedBlog={selectedBlog} />
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <IconButton
            aria-label="Like"
            icon={<FiHeart />}
            colorScheme="red"
            variant="ghost"
          />
          <IconButton
            aria-label="Bookmark"
            icon={<FiBookmark />}
            colorScheme="gray"
            variant="ghost"
            ml="2"
          />
          <IconButton
            aria-label="Share"
            icon={<FiShare2 />}
            colorScheme="gray"
            variant="ghost"
            ml="2"
          />
        </Box>
        <Stack direction="row">
          {selectedBlog.category.map((category, index) => {
            return (
              <Badge colorScheme="whatsapp" key={index}>
                {category}
              </Badge>
            );
          })}
        </Stack>

        <Box>
          <Text fontSize="sm" color="gray.600">
            Share this post
          </Text>
          <Link fontSize="sm" color="blue.500">
            Copy Link
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleBlogPage;
