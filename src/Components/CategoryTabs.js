/** @format */

import { Tabs, TabList, Tab } from "@chakra-ui/react";

const CategoryTabs = ({ setCategory }) => {
  const categories = {
    All: "white",
    "Connecting the Dots": "purple",
    "ADHD, Anxiety and PTSD": "blue",
    "Side Effects Of Immigration": "green",
    "Make Me Make Sense!": "yellow",
  };

  function handleCategoryChange(e) {
    //only fetch blogs with selected category
  }

  return (
    <Tabs
      onChange={handleCategoryChange}
      variant="soft-rounded"
      colorScheme="linkedin"
      size="md"
      isLazy
      m={5}
      p={4}
    >
      <TabList justifyContent="center">
        {Object.keys(categories).map((category) => (
          <Tab key={category}>{category}</Tab>
        ))}
        {/* <Tab>Connecting the Dots</Tab>
        <Tab>ADHD, Anxiety and PTSD</Tab>
        <Tab>Side Effects of Immigration</Tab>
        <Tab>Making Me Make Sense!</Tab> */}
      </TabList>
    </Tabs>
  );
};

export default CategoryTabs;
