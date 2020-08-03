import * as React from "react";
import styled from "styled-components";
import {
  Select,
  // Stack,
  Input,
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
        <Column /* style={{ backgroundColor: "green" }} */>
          <ProductTitle>
            Personalized Portrait of Lilly the Wonder cat
          </ProductTitle>
          <br />
          {/* <input
            type="text"
            className="border text-gray-800 h-12 rounded-lg shadow.sm w-full py-2 px-3 focus:outline-none"
          /> */}
          <Input
            className="rounded"
            placeholder="chakra"
            mt="10px"
            // size="md"
          />

          <br />
          <Select placeholder="Select option" mt="20px" mb="20px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <SubHeading>tailwind select</SubHeading>
          <select
            style={{ width: "100%" }}
            className="border rounded-lg text-gray-800 shadow.sm w-full py-2 px-3 focus:outline-none"
          >
            <option value="1">1 Pet</option>
            <option value="2">2 Pets</option>
            <option value="1">3 Pets</option>
            <option value="1">4 Pets</option>
          </select>
          <br />
          <br />
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
          <br />
          {/*  <Stack spacing={6}>
            <Input placeholder="large size" size="lg" />
            <Input placeholder="default size" size="md" />
            <Input placeholder="small size" size="sm" />
          </Stack> */}
          <br />
          {/*  <Stack spacing={3}>
            <Select size="lg" placeholder="Get Some" variant="outline">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Stack> */}
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
