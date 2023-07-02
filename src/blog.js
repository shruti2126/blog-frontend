/** @format */

///** @format */

import React from "react";
import { Box, Text, Button, Center, Flex, Image } from "@chakra-ui/react";

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
    {
      id: 3,
      title: "Blog Post 3",
      imageUrl:
        "https://civiewnews.com/wp-content/uploads/2021/11/ADHD-Article-Graphic-01-720x480.png",
      imageAlt: "What adhd is vs What people perceive it to be",
      content: "Pellentesque euismod nisi vitae ante ultrices eleifend.",
    },
    {
      id: 4,
      title: "Blog Post 4",
      imageUrl:
        "https://civiewnews.com/wp-content/uploads/2021/11/ADHD-Article-Graphic-01-720x480.png",
      imageAlt: "What adhd is vs What people perceive it to be",
      content: "Pellentesque euismod nisi vitae ante ultrices eleifend.",
    },
    // Add more blog posts as needed
  ];

  return (
    <Center flexDir="column" py={8}>
      <Box bg="white" p={4} mb={4}>
        <Text as="h1" fontSize="3xl" fontWeight="bold">
          My Blog
        </Text>
      </Box>
      <Flex wrap="wrap" justify="center">
        {blogPosts.map((post) => (
          <Box
            key={post.id}
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
          >
            <Box>
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                objectFit="cover"
                borderRadius="lg"
                h="200px"
                w="100%"
              />
            </Box>
            <Box p={4}>
              <Text as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
                {post.title}
              </Text>
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
