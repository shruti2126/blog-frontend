/** @format */

import React from "react";
import {
  Container,
  Heading,
  Box,
  Text,
  Button,
  Center,
  Flex,
  Image,
} from "@chakra-ui/react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      imageUrl:
        "https://img.freepik.com/free-vector/hand-drawn-world-mental-health-day_52683-44659.jpg?w=1060&t=st=1688198372~exp=1688198972~hmac=6e50a76fd27882192ccaa87aaac6f4a4a62c304f6057b58a9658e46d1efa7c5c",
      imageAlt:
        "Just a random mental health related photo of a girl sitting on a sofa looking distressed",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Blog Post 2",
      imageUrl:
        "https://civiewnews.com/wp-content/uploads/2021/11/ADHD-Article-Graphic-01-720x480.png",
      imageAlt: "What adhd is vs What people perceive it to be",
      content: "Pellentesque euismod nisi vitae ante ultrices eleifend.",
    },
    // Add more blog posts as needed
  ];

  return (
    <Center flexDir="column" bg="gray.200" py={8}>
      <Box bg="white" p={4} mb={4}>
        <Heading as="h1" size="xl" mb={4}>
          My Blog
        </Heading>
      </Box>
      <Flex wrap="wrap" justify="center">
        {blogPosts.map((post) => (
          <Box
            key={post.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            m={2}
            cursor="pointer"
            transition="box-shadow 0.2s"
            _hover={{ boxShadow: "lg" }}
            boxShadow="md"
          >
            <Box borderWidth="1px" borderTopRadius="lg">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                objectFit="cover"
                h="200px"
                w="100%"
              />
            </Box>
            <Box p={4}>
              <Heading as="h2" size="lg" mb={2}>
                {post.title}
              </Heading>
              <Text color="gray.600" fontSize="md" mb={4}>
                {post.content}
              </Text>
              <Button size="sm" colorScheme="teal">
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Center>
  );
};

export default Blog;
