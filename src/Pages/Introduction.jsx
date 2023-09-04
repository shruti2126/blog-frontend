/** @format */

import { Box, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <Box
      w="70%"
      h="100%"
      bgColor="chakra-placeholder-color._dark"
      padding="20px" // Add padding for better readability
      textAlign="center"
    >
      <Text
        fontSize="xl"
        fontWeight="semibold"
        color="whiteAlpha.800"
        lineHeight="1.6" // Adjust line height for readability
        letterSpacing="wide" // Add some letter spacing for better spacing between characters
      >
        This blog is my way of staying accountable on my journey to
        understanding myself. I want this to be a means to externalize
        thoughts... thoughts that I do not fully attend to because they are
        painful, ruminative, impractical, catastrophic, or just
        anxiety-inducing. These thoughts have been at the center of my toxic
        perfectionism and general self-sabotaging tendencies for far too long.I aim
        to make this blog engaging and succinct for your consumption.
      </Text>
    </Box>
  );
};

export default Introduction;
