/** @format */

import axios from "axios";

const addNewComment = async ({ postId, content, author }) => {
  const response = await axios.post(
    "http://localhost:8080/comments/addNewComment",
    { postId: postId, content: content, author: author },
    {
      params: { populate: "*" },
    }
  );
  console.log(response.statusText);
};

export default addNewComment;
