/** @format */

import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Divider,
  Stack,
  Avatar,
  Center,
  Textarea,
  Button,
} from "@chakra-ui/react";
import addComment from "../API_Requests/Comments/POST/addComment";

const Comments = ({ selectedBlog }) => {
  const [newComment, setNewComment] = useState("");
  const commentData = selectedBlog.comments;

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    addComment({
      postId: selectedBlog.id,
      content: newComment,
      author: "new author",
    }).then((data) => console.log(data));
  };

  if (commentData.length !== 0) {
    return (
      <Box mt="40px">
        <Center>
          <Text fontSize="xl" fontWeight="semibold" mb="20px">
            Comments
          </Text>
        </Center>
        <Textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add your comment..."
          mt="20px"
        />
        <Button
          colorScheme="teal"
          mt="10px"
          mb="20px"
          onClick={handleCommentSubmit}
        >
          Submit
        </Button>
        {commentData.map((comment) => (
          <Box key={comment.id} mb="20px">
            <Stack direction="row">
              <Avatar size="sm" name={comment.attributes.author} mr="2px" />
              <Text fontWeight="semibold">{comment.attributes.author}</Text>
            </Stack>
            <Stack direction="col">
              <Text fontSize="md" color="gray.600" mt="10px">
                {comment.attributes.content}
              </Text>
            </Stack>
            <Divider my="10px" />
          </Box>
        ))}
      </Box>
    );
  } else {
    return <Text mt="40px">No Comments Yet</Text>;
  }
};

export default Comments;
