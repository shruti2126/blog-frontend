/** @format */
import { Tab } from "@chakra-ui/react";

const Tab = ({category}) => {
  return (
    <Tab key={category}>
      <span>{category}</span>
    </Tab>
  );
};
export default Tab;
