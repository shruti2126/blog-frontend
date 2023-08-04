/** @format */

import { Box, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <Box h="100%" bgColor="chakra-placeholder-color._dark">
      <Text
        fontSize="2xl"
        p={4}
        m={2}
        fontWeight={"semibold"}
        color={"whiteAlpha.800"}
      >
        This blog is way for me stay accountable on my healing journey. I want
        this to be a means to externalize my painful thoughts that cloud my
        brain and take up unnecessary space since I do not fully attend to them.
        With this Blog I feel a sense of responsibility and motivation to
        honestly put down what I feel and think about so that I can make better
        sense of them and gain some clarity with why I think and feel and
        ruminate about these things. In case I manage to have enough audience
        for this blog, I want to make it as interesting and engaging and succint
        for consumption as possible!
      </Text>
    </Box>
  );
};
export default Introduction;
