/** @format */

import { Box, Text, Center, Flex } from "@chakra-ui/react";
import "../Styles/blog.css";
import BlogsList from "./BlogsList.js";
import Introduction from "./Introduction";
import Topics from "./Topics";

const Blog = () => {
  return (
    <Center
      className="background-container"
      flexDir="column"
      py={8}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box p={4} mb={4}>
        <Text as="h1" fontSize="5xl" fontWeight="bold" color={"pink.700"}>
          Invisible Obstacles
        </Text>
      </Box>
      <Introduction />
      <Topics />
      <Flex wrap="wrap" justify="center">
        <BlogsList />
      </Flex>
    </Center>
  );
};

export default Blog;
