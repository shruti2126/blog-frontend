/** @format */

import { Tabs, TabList } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setCategory } from "../Redux/Reducers/categoryReducer";

const CategoryTabs = () => {
  const categoryList = [
    "All",
    "Connecting The Dots",
    "ADHD, Anxiety and PTSD",
    "Side Effects Of Immigration",
    "Make Me Make Sense!",
  ];

  const dispatch = useDispatch();
  const handleTabChange = (index) => {
    dispatch(setCategory(categoryList[index]));
  };

  return (
    <Tabs
      variant="soft-rounded"
      size="md"
      isLazy
      m={5}
      p={4}
      onChange={handleTabChange}
      textColor={"whiteAlpha.500"}
    >
      <TabList categoryList={categoryList} />
    </Tabs>
  );
};

export default CategoryTabs;
