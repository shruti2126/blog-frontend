/** @format */

import { TabList } from "@chakra-ui/react";
import Tab from "./Tab";

const TabList = ({ categoryList }) => {
  return (
    <TabList justifyContent="center">
      {categoryList.map((category) => (
        <Tab category={category}>
          <span>{category}</span>
        </Tab>
      ))}
    </TabList>
  );
};
