/** @format */

import React, { useEffect, useRef } from "react";
import { Box, Text, Center, Textarea, Button } from "@chakra-ui/react";
import addNewComment from "../API_Requests/Comments/POST/addComment";
import { useSelector, useDispatch } from "react-redux";
import {
  addComment,
  fetchCommentsByPost,
} from "../Redux/Reducers/commentsReducer";
import { v4 as uuidv4 } from "uuid";
import Comment from "../Components/Comment";

const Comments = ({ selectedBlog }) => {
  const commentData = useSelector((state) => state.comments.data);
  const commentInputRef = useRef("");
  const dispatch = useDispatch();
  console.log("comment data in Comments.js = ", commentData);

  const handleCommentSubmit = () => {
    const newCommentId = uuidv4();
    const newComment = {
      id: newCommentId,
      postId: selectedBlog.id,
      content: commentInputRef.current.value,
      author: "new author",
    };
    addNewComment(newComment);
    dispatch(addComment(newComment));
    commentInputRef.current.value = ""; // Clear the input after submitting
  };
  useEffect(() => {
    // Fetch comments whenever the selectedBlog.id changes
    dispatch(fetchCommentsByPost(selectedBlog.id));
  }, [selectedBlog.id, dispatch]);

  if (commentData.length !== 0) {
    return (
      <Box mt="40px">
        <Center>
          <Text fontSize="xl" fontWeight="semibold" mb="20px">
            Comments
          </Text>
        </Center>
        <Textarea
          ref={commentInputRef} // Assign the ref to the textarea
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
          <Comment comment={comment}/>
          // <Box key={comment.id} mb="20px">
          //   <Stack direction="row">
          //     <Avatar size="sm" name={comment.author} mr="2px" />
          //     <Text fontWeight="semibold">{comment.author}</Text>
          //   </Stack>
          //   <Stack direction="col">
          //     <Text fontSize="md" color="gray.600" mt="10px">
          //       {comment.content}
          //     </Text>
          //   </Stack>
          //   <Divider my="10px" />
          // </Box>
        ))}
      </Box>
    );
  } else {
    return <Text mt="40px">No Comments Yet</Text>;
  }
};

export default Comments;
