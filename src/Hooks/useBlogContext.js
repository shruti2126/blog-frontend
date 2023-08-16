/** @format */

import { useContext } from "react";
// Custom hook to access the context
export function useBlogContext({ BlogContext }) {
  return useContext(BlogContext);
}
