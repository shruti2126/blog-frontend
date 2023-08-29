/** @format */

import axios from "axios";

const addComment = async ({ postId, content, author }) => {
  const response = await axios.post(
    "http://localhost:8080/comments",
    { postId: postId, content: content, author: author },
    {
      params: { populate: "*" },
    }
	);
	console.log(response.statusText);
};

export default addComment;