/** @format */
import { Box, Text, Divider, Stack, Avatar } from "@chakra-ui/react";

const Comment = ({ comment }) => {
  return (
    <Box key={comment.id} mb="20px">
      <Stack direction="row">
        <Avatar size="sm" name={comment.author} mr="2px" />
        <Text fontWeight="semibold">{comment.author}</Text>
      </Stack>
      <Stack direction="col">
        <Text fontSize="md" color="gray.600" mt="10px">
          {comment.content}
        </Text>
      </Stack>
      <Divider my="10px" />
    </Box>
  );
};
export default Comment;
