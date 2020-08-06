// 6-8-20
import * as React from "react";
// import styled from "styled-components";
import {
  //   Select,
  //   Input,
  Text,
  //   Badge,
  Box,
  //   AccordionItem,
  //   AccordionHeader,
  //   AccordionIcon,
  //   AccordionPanel,
} from "@chakra-ui/core";

export const HowItWorks = () => {
  return (
    <Box
      px={["7.5%", "7.5%", "7.5%", "10%"]}
      pt="4%"
      pb="50px"
      style={{ backgroundColor: "rgb(252,252,252)", height: "100vh" }}
    >
      <Text
        fontSize={["2xl", "4xl", "6xl", "6xl"]}
        textAlign="center"
        color="gray.800"
      >
        How it Works. The Ordering Process.
      </Text>
    </Box>
  );
};
