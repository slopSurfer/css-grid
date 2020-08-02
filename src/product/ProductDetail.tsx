import * as React from "react";
import styled from "styled-components";
import {
  Select,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/core";

export const ProductDetail = () => {
  return (
    <div>
      <MainGrid>
        <div className="bg-gray-200 min-h-screen pt-2 font-mono my-16">
          <div className="container mx-auto">
            <div className="inputs w-full max-w-2xl p-6 mx-auto">
              <h2 className="text-2xl text-gray-900">Account Setting</h2>
              <form className="mt-6 border-t border-gray-400 pt-4">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      email address
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      id="grid-text-1"
                      type="text"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="w-full md:w-full px-3 mb-6 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      password
                    </label>
                    <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                      change your password
                    </button>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      pick your country
                    </label>
                    <div className="flex-shrink w-full inline-block relative">
                      <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                        <option>choose ...</option>
                        <option>USA</option>
                        <option>France</option>
                        <option>Spain</option>
                        <option>UK</option>
                      </select>
                      <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      fav language
                    </label>
                    <div className="flex-shrink w-full inline-block relative">
                      <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                        <option>choose ...</option>
                        <option>English</option>
                        <option>France</option>
                        <option>Spanish</option>
                      </select>
                      <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="personal w-full border-t border-gray-400 pt-4">
                    <h2 className="text-2xl text-gray-900">Personal info:</h2>
                    <div className="flex items-center justify-between mt-4">
                      <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          first name
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          type="text"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          last name
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        user name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        type="text"
                        required
                      />
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Bio
                      </label>
                      <textarea
                        className="bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                        type="submit"
                      >
                        save changes
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 pt-2 font-mono my-16" />
        <Column /* style={{ backgroundColor: "red" }} */>
          <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
            <option>choose ...</option>
            <option>USA</option>
            <option>France</option>
            <option>Spain</option>
            <option>UK</option>
          </select>
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
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input type="tel" roundedLeft="0" placeholder="phone number" />
          </InputGroup>
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
          <Stack spacing={6}>
            <Input placeholder="large size" size="lg" />
            <Input placeholder="default size" size="md" />
            <Input placeholder="small size" size="sm" />
          </Stack>
          <br />
          <Stack spacing={3}>
            <Select size="lg" placeholder="Get Some" variant="outline">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Stack>
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
