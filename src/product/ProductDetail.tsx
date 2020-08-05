import * as React from "react";
import styled from "styled-components";
import {
  Select,
  // Stack,
  Input,
  Text,
  Badge,
  Box,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/core";

interface titleProps {
  title: string;
  color?: string;
  sizes?: string;
  opacity?: number;
  mt?: number;
}

export const ProductDetail = () => {
  const TitleText = ({
    title,
    color = "black",
    sizes = "lg",
    opacity = 1,
    mt = 10,
  }: titleProps) => {
    return (
      <Text
        mt={mt}
        color={color}
        opacity={opacity}
        fontWeight={300}
        fontSize={sizes}
        fontFamily="Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif"
      >
        {title}
      </Text>
    );
  };
  return (
    <div style={{ backgroundColor: "rgb(252,252,252)", height: "100vh" }}>
      <MainGrid>
        <Column>
          <ProductImage
            alt="pic"
            // src="https://i.etsystatic.com/19375526/r/il/ce1a78/1752910912/il_1140xN.1752910912_ey4x.jpg"
            src="https://i.etsystatic.com/16594484/r/il/f9fb38/2271689222/il_794xN.2271689222_e83g.jpg"
          />
        </Column>
        <Column>
          <TitleText
            color="gray.900"
            sizes="4xl"
            title=" Personalized Portrait of Lilly the Wonder cat"
            mt={0}
          />

          <Badge
            fontSize="0.9rem"
            bg="#e5cfb2"
            px={3}
            py={1}
            borderRadius={10}
            mt={4}
          >
            Best Seller
          </Badge>

          <Text
            mt={4}
            opacity={0.91}
            fontWeight={500}
            fontSize="26px"
            fontFamily="Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif"
          >
            AU$3.95+
          </Text>
          <TitleText mt={0} title="gst where applicable" />

          <TitleText sizes="xl" color="gray.800" title="personalised message" />
          <Input
            placeholder="enter text..."
            mt={2}
            mb={10}
            h="37px"
            fontSize="15px"
            color="gray.600"
            borderRadius="lg"
            borderColor="gray.300"
          />
          <TitleText sizes="xl" title="number of pets" />
          <Select
            placeholder="how many pets"
            color="gray.500"
            h="37px"
            fontSize="15px"
            borderColor="gray.300"
            borderRadius="lg"
            mt={2}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <TitleText sizes="xl" title="size" />
          <Select
            placeholder="image size"
            color="gray.500"
            borderColor="gray.300"
            borderRadius="lg"
            h="37px"
            fontSize="15px"
            mt={2}
            mb={10}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <ButtonBasket>Add to Basket</ButtonBasket>
        </Column>
      </MainGrid>
      <Box mx={["7.5%", "7.5%", "7.5%", "10%"]} mb="50px">
        <TitleText sizes="xl" title="Description" />
        <Text opacity={0.8} mt={2}>
          Custom Watercolor Pet Portrait, Pet Portrait, Custom Dog Portrait, Pet
          Illustration, Pet Art Print, Dog Lover Gift, Personalised Gift, Custom
          Pet Portrait, Personalised Pet Portrait, Pet Illustration, Dog Gift,
          Printable Digital Portrait, Custom Pet Print, Digital Watercolour
          Portrait, Pet Loss Gift, Dog Passed Away Gift, Personalised Pet,
          Family Pet, Gift For Her, Gift For Him, Valentines Gift, Custom Dog
          Portrait, Wall Art. ***PLEASE NOTE THAT THIS IS FOR A PHYSICAL PRINTED
          COPY*** IF YOU WOULD LIKE A DIGITAL COPY, THEN PLEASE PURCHASE VIA THE
          FOLLOWING PRODUCT LINK:
        </Text>

        <AccordionItem mt={6} defaultIsOpen={true}>
          <AccordionHeader>
            <Box flex="1" textAlign="left" fontSize="2xl">
              How to order. Required information
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel bg="yellow.100" rounded="lg">
            In order for me to get started on creating your piece of art, I
            would ask that you provide me with 2-3 high quality pictures of your
            pet/s (face on tends to look best), and ensure to include their
            name/s and preferred background colour within the comments section
            on checking out.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={6} defaultIsOpen={true}>
          <AccordionHeader /* _expanded={{ bg: "tomato", color: "white" }} */>
            <Box flex="1" textAlign="left" fontSize="2xl">
              Reviews
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel bg="green.100">
            Excellent seller quick delivery would definitely recommend this
            seller! I’m in love with my picture Purchased item: Louise reviewed
            Custom Watercolor Pet Portrait, Pet Portrait, Custom Dog Portrait,
            Pet Illustration, Pet Art Print, Dog Lover Gift, Personalised Gift
            Custom Watercolor Pet Portrait, Pet Portrait, Custom Dog Portrait,
            Pet Illustration, Pet Art Print, Dog Lover Gift, Personalised Gift
            Hayley 03 Aug, 2020 5 out of 5 stars Fantastic service & quality,
            very quick delivery. We absolutely love our picture. Hayley added a
            photo of their purchase Purchased item: Hayley reviewed Custom
            Watercolor Pet Portrait, Pet Portrait, Custom Dog Portrait, Pet
            Illustration, Pet Art Print, Dog Lover Gift, Personalised Gift
            Custom Watercolor Pet Portrait, Pet Portrait, Cust
          </AccordionPanel>
        </AccordionItem>
      </Box>
    </div>
  );
};

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* // center it vertically when 2 columns */
  align-items: center;
  grid-gap: 4rem;
  row-gap: 4rem;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 0.75rem;
  margin-bottom: 5%;
  /* background-color: blue; */
  @media (max-width: 834px) {
    grid-template-columns: 1fr;
    margin-left: 7.5%;
    margin-right: 7.5%;
  }
  @media only screen and (min-width: 1440px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`;

const Column = styled.div``;

const ButtonBasket = styled.button`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  outline: 0;
  border-radius: 40px;
  margin-top: 10px;
  width: 100%;
  height: 42px;
  /* background: rgba(0, 0, 0, 0.91); */
  /* background: #258e25; // rgb(19, 139, 91) */
  background: rgb(19, 139, 91);
  color: white;
  /* color: rgba(0, 0, 0, 0.91); */
  font-size: 1em;
`;

/* const SelectPets = styled.select`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: rgb(0 0 0 / 0.8);
  background-color: rgb(252, 252, 252);
  text-indent: 5px;
  line-height: 1.21rem;
  border-color: rgba(34, 36, 38, 0.15);
  border-width: 1px;
  border-radius: 6px;
  height: 40px;
  padding-left: 12px;
  padding-right: 36px;
  max-width: 100%;
  outline: 0;
  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
    background-color: rgb(255, 255, 255);
    border-width: 1px;
  }
  &:focus {
    border-color: #85b7d9;
  }
  cursor: pointer;
  box-shadow: 0 0px 0px 0 rgba(34, 34, 34, 0.2),
    0 1px 12px 0 rgba(34, 34, 34, 0.2);
`; */

/* const ProductTitle = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 3rem;
  font-stretch: extra-condensed;
  @media (max-width: 768px) {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
`; */

const ProductImage = styled.img`
  /* import to keep <ims> centered in column */
  margin: auto;
  /* --------- */
  /* max-height: 80vh; */
  border-radius: 6px;
  box-sizing: border-box;
  @media (max-width: 834px) {
    /* max-height: 60vh; */
    margin: auto;
  }
`;

/* const SubHeading = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  
   margin-top: 10px;
   margin-bottom: 5px;
  
`; */

/* const InputSN = styled.input`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: rgb(0 0 0 / 0.8);
  padding: 0.67857143em 1em;
  line-height: 1.21rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.28571429rem;
  outline: 0;
  max-width: 100%;
  text-align: left;
  background: #fff;
  ::placeholder {
    color: rgb(0 0 0 / 0.5);
    font-size: 1.1rem;
  }
  &:focus {
    border-color: #85b7d9;
  }
`; */
