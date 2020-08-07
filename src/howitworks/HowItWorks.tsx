// 6-8-20
import * as React from "react";
import styled from "styled-components";
// import { color, space, layout } from "styled-system";
import { Box, Text } from "@chakra-ui/core";

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
    <div style={{ backgroundColor: "rgb(252,252,252)", height: "100vh" }}>
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
      </GridSteps>
    </div>
  );
};

const GridSteps = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 4rem;
  row-gap: 4rem;
  margin-left: 15%;
  margin-right: 15%;
  padding-top: 4%;
  margin-bottom: 5%;
  /* background-color: lightgray; */
  @media (max-width: 865px) {
    margin-left: 7.5%;
    margin-right: 7.5%;
    padding-top: 3%;
  }
  @media only screen and (min-width: 1440px) {
    /* padding-top: 5%; */
    grid-template-columns: 1fr;
    margin-left: 20%;
    margin-right: 20%;
  }
`;

// const Card = (props: {
//   title: string;
//   text: string;
//   description: string;
//   color: string;
// }) => {
//   return (
//     <>
//       <div
//         className={`rounded-4 rounded ${
//           props.color
//         } sm: px-10 md:px-20 lg:px-32 `}
//       >
//         <div className="">
//           <p className="font-bold text-6xl text-gray-800 mt-12">
//             {props.title}
//           </p>
//           <p className="font-semibold sm:text-4xl md:text-5xl text-gray-800 mt-0">
//             {props.text}
//           </p>
//           <p className="sm:text-3xl md:text-4xl text-gray-700 mt-4 mb-12">
//             {props.description}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

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
      >
        <Text
          fontSize={["4xl", "6xl"]}
          fontWeight="bold"
          letterSpacing="wider"
          mt="30px"
          color="gray.800"
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
        <Text fontSize={["2xl", "4xl"]} mb="30px" mt="10px" color="gray.700">
          {props.description}
        </Text>
      </Box>
    </>
  );
};
