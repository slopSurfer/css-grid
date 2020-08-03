import * as React from "react";
import styled from "styled-components";
import {
  Select,
  // Stack,
  Input,
  Text,
  // InputGroup,
  // InputLeftAddon,
} from "@chakra-ui/core";

export const ProductDetail = () => {
  return (
    <div>
      <MainGrid>
        <Column>
          <ProductImage
            alt="pic"
            src="https://i.etsystatic.com/19375526/r/il/ce1a78/1752910912/il_1140xN.1752910912_ey4x.jpg"
          />
        </Column>
        <Column>
          <ProductTitle>
            Personalized Portrait of Lilly the Wonder cat
          </ProductTitle>

          <Text
            mt={10}
            color="black"
            opacity={0.7}
            fontWeight={300}
            fontSize="lg"
            fontFamily="Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif"
          >
            personalised message
          </Text>
          <Input
            placeholder="enter text..."
            mt={2}
            mb={10}
            h={30}
            fontSize={12}
            color="gray.600"
            borderRadius="lg"
            borderColor="gray.300"
          />
          <Text
            mt="20px"
            color="black"
            opacity={0.7}
            fontWeight={300}
            fontSize="lg"
            fontFamily="Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif"
          >
            number of pets
          </Text>
          <Select
            placeholder="Select Option"
            color="gray.600"
            borderColor="gray.300"
            h={30}
            fontSize={12}
            mt={2}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Text
            mt="20px"
            color="black"
            opacity={0.7}
            fontWeight={300}
            fontSize="lg"
            fontFamily="Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif"
          >
            size
          </Text>
          <Select
            placeholder="Select image size"
            color="gray.600"
            borderColor="gray.300"
            h={30}
            fontSize={12}
            mt={2}
            mb={10}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          {/*  <InputGroup>
            <InputLeftAddon children="+234" />
            <Input type="tel" roundedLeft="0" placeholder="phone number" />
          </InputGroup> */}
          <SubHeading>number of pets</SubHeading>
          <SelectPets style={{ width: "100%" }}>
            <option value="1">1 Pet</option>
            <option value="2">2 Pets</option>
            <option value="1">3 Pets</option>
            <option value="1">4 Pets</option>
          </SelectPets>
          <SubHeading>size</SubHeading>
          <SelectPets style={{ width: "100%" }}>
            <option value="1">6 x 4</option>
            <option value="2">10 x 8</option>
            <option value="1">3 Pets</option>
            <option value="1">4 Pets</option>
          </SelectPets>
          <br />
          <SubHeading>personalised message</SubHeading>
          <InputSN
            style={{ width: "100%" }}
            placeholder="your animals name for example"
          />

          <br />
          <br />
          <ButtonBasket>Add to Basket</ButtonBasket>
        </Column>
      </MainGrid>
    </div>
  );
};

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  row-gap: 4rem;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 4rem;
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
  /* border-width: 0.1rem; */
  /* border-color: rgba(0, 0, 0, 0.91); */
  /* border-radius: 0.28571429rem; */
  margin-top: 10px;
  width: 100%;
  height: 42px;
  background: rgba(0, 0, 0, 0.91);
  color: white;
  /* color: rgba(0, 0, 0, 0.91); */
  font-size: 1em;
`;

const SelectPets = styled.select`
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
`;

const ProductTitle = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 3rem;
  font-stretch: extra-condensed;
  @media (max-width: 768px) {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
`;

const ProductImage = styled.img`
  /* import to keep <ims> centered in column */
  margin: auto;
  /* --------- */
  max-height: 80vh;
  @media (max-width: 834px) {
    max-height: 60vh;
    margin: auto;
  }
`;

const SubHeading = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  /* text-align: center; */
  margin-top: 10px;
  margin-bottom: 5px;
  /* margin-bottom: 20px; */
`;

const InputSN = styled.input`
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
`;
