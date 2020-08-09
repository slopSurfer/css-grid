// 6-8-20
import * as React from "react";
import styled from "styled-components";
// import { color, space, layout } from "styled-system";
import { Box, Text, List, ListItem, ListIcon } from "@chakra-ui/core";

export const HowItWorks = () => {
  const step1Desc = `Pick the cutest photo of your dog or cat for a pet portrait and submit 
    it to our digital artists with your order. Check out our image guidelines 
    for some helpful tips!`;
  const step2Desc = `We love getting to know your furry loved one! We'll print 
  their name on the final artwork in our signature font, we offer three distinct 
  background color options, and two bold frame options (or frameless!).`;
  const step3Desc = `Sit tight while our talented and passionate team of digital artists 
  illustrate your artwork. Most orders ship within 1-2 weeks and sometimes even sooner.`;
  return (
    <div
      style={{
        backgroundColor: "rgb(252,252,252)",
        height: "100vh",
        marginBottom: "80px",
      }}
    >
      <GridSteps>
        <Card
          title="Step 1"
          text="Select your photo"
          description={step1Desc}
          color="red.200"
        />
        <Card
          title="Step 2"
          text="Customize your design"
          description={step2Desc}
          color="yellow.200"
        />
        <Card
          title="Step 3"
          text="Get excited"
          description={step3Desc}
          color="green.200"
        />
        <PhotoTips />
      </GridSteps>
    </div>
  );
};

const GridSteps = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  margin-left: 15%;
  margin-right: 15%;
  padding-top: 2%;
  @media (max-width: 1024px) {
    background-color: red;
    grid-template-columns: 1fr;
    margin-left: 10%;
    margin-right: 10%;
  }
  @media (max-width: 768px) {
    background-color: green;
    grid-template-columns: 1fr;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const PhotoTips = () => (
  <Box
    rounded="lg"
    bg="gray.100"
    py="25px"
    px={["2rem", "2rem", "4rem", "6rem"]}
    borderWidth="1px"
  >
    <Text fontSize={["4xl", "6xl"]} fontWeight="bold" mb="15px">
      Tips to get a great image
    </Text>
    <Box>
      <List spacing={6} fontSize={["15px", "16px", "16px", "18px"]} mb="20px">
        <ListItem>
          <ListIcon icon="check" color="green.500" />
          Get a close up of your furry loved one, this way we can better see all
          of their beautiful the details.
        </ListItem>
        <ListItem>
          <ListIcon icon="check" color="green.500" />
          Get on their level! Crouch down when taking the photo and try to get
          eye level for the best results.
        </ListItem>
        <ListItem>
          <ListIcon icon="check" color="green.500" />
          The best poses are when your pet is either sitting or standing, not
          laying down.
        </ListItem>
        <ListItem>
          <ListIcon icon="check" color="green.500" />
          Light is so important when it comes to a good photo. Outdoor daylight
          is always the best option!
        </ListItem>
      </List>
    </Box>
  </Box>
);

const Card = (props: {
  title: string;
  text: string;
  description: string;
  color: string;
}) => {
  return (
    <>
      <Box
        rounded="lg"
        bg={`${props.color}`}
        px={["2rem", "2rem", "4rem", "6rem"]}
        color="white"
      >
        <Text
          fontSize={["4xl", "6xl"]}
          fontWeight="bold"
          letterSpacing="wider"
          mt="30px"
          color="gray.800"
          // color="white.300"
        >
          {props.title}
        </Text>
        <Text
          fontSize={["2xl", "5xl"]}
          fontWeight="semibold"
          letterSpacing="wide"
          color="gray.800"
        >
          {props.text}
        </Text>
        <Text
          fontSize={["15px", "16px", "16px", "18px"]}
          mb="30px"
          mt="10px"
          color="gray.700"
        >
          {props.description}
        </Text>
      </Box>
    </>
  );
};
