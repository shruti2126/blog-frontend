/** @format */
import { useState } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBlogs } from "../Redux/Reducers/blogReducer";
import { setCategory } from "../Redux/Reducers/categoryReducer";

const CategoryTabs = () => {
  const categoryList = [
    "All",
    "Connecting the Dots",
    "ADHD, Anxiety and PTSD",
    "Side Effects Of Immigration",
    "Make Me Make Sense!",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogs = useSelector(selectAllBlogs);
  const dispatch = useDispatch();

  const handleTabChange = (index) => {
    setSelectedCategory(categoryList[index]);
    dispatch(setCategory(selectedCategory));
    console.log("filtered blogs in category tabs = ", blogs);
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
      <TabList justifyContent="center">
        {categoryList.map((category) => (
          <Tab key={category}>
            <span>{category}</span>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CategoryTabs;
