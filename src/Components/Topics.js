/** @format */

// import { Tabs, TabList, Tab, AbsoluteCenter } from "@chakra-ui/react";

// const Topics = () => {
//   return (
//     <Tabs
//       position="relative"
//       variant="soft-rounded"
//       colorScheme="green"
//       defaultIndex={0}
//       m={5}
//       p={4}
//     >
//       <AbsoluteCenter axis="both">
//         <TabList>
//           <Tab>Connecting the Dots</Tab>
//           <Tab>ADHD, Anxiety and PTSD in the mix</Tab>
//           <Tab>Side Effects of Immigration</Tab>
//           <Tab>Whatever</Tab>
//         </TabList>
//       </AbsoluteCenter>
//     </Tabs>
//   );
// };
// export default Topics;
import { Tabs, TabList, Tab } from "@chakra-ui/react";

const Topics = () => {
  return (
    <Tabs
      variant="soft-rounded"
      colorScheme="linkedin"
      size="md"
      isLazy
      m={5}
      p={4}
    >
      <TabList justifyContent="center">
        <Tab>Connecting the Dots</Tab>
        <Tab>ADHD, Anxiety and PTSD</Tab>
        <Tab>Side Effects of Immigration</Tab>
        <Tab>Making Me Make Sense!</Tab>
      </TabList>
    </Tabs>
  );
};

export default Topics;
