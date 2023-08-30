/** @format */

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
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
