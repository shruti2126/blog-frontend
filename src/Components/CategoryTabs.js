/** @format */

import { Tabs, TabList, Tab, TabPanels } from "@chakra-ui/react";
import categoryList from "../Data/Categories";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Reducers/categoryReducer";

const CategoryTabs = () => {
  const dispatch = useDispatch();
  const handleTabChange = (index) => {
    const selectedCategory = categoryList[index];
    console.log(selectedCategory);
    dispatch(setCategory(selectedCategory));
  };

  return (
    <Tabs
      variant="soft-rounded"
      colorScheme="linkedin"
      size="md"
      isLazy
      m={5}
      p={4}
      onChange={handleTabChange}
    >
      <TabList justifyContent="center">
        {categoryList.map((category) => (
          <Tab key={category}>
            <span>{category}</span>
          </Tab>
        ))}
      </TabList>
      <TabPanels></TabPanels>
    </Tabs>
  );
};

export default CategoryTabs;
