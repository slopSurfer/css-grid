import * as React from "react";
import styled from "styled-components";
// import { Dropdown } from "semantic-ui-react";

/* const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    // image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    // image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    // image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    // image: { avatar: true, src: "/images/avatar/small/christian.jpg" },
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    // image: { avatar: true, src: "/images/avatar/small/matt.jpg" },
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    // image: { avatar: true, src: "/images/avatar/small/justen.jpg" },
  },
]; */

export const ProductDetail = () => {
  return (
    <div>
      <MainGrid>
        <Column /* style={{ backgroundColor: "red" }} */>
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
          <SubHeading>Number of Pets</SubHeading>
          <SelectPets style={{ width: "100%" }}>
            <option value="1">1 Pet</option>
            <option value="2">2 Pets</option>
            <option value="1">3 Pets</option>
            <option value="1">4 Pets</option>
          </SelectPets>
          <SubHeading>Size</SubHeading>
          <SelectPets style={{ width: "100%" }}>
            <option value="1">6 x 4</option>
            <option value="2">10 x 8</option>
            <option value="1">3 Pets</option>
            <option value="1">4 Pets</option>
          </SelectPets>
          <br />
          <br />
          <SubHeading>Personalised Message</SubHeading>
          <Input style={{ width: "100%" }} />

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
  outline: 0;
  border-radius: 40px;
  /* border-radius: 0.28571429rem; */
  margin-top: 10px;
  width: 100%;
  height: 42px;
  background: rgba(0, 0, 0, 0.91);
  color: white;
  font-size: 1em;
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
`;

const SelectPets = styled.select`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: rgb(0 0 0 / 0.8);
  text-indent: 5px;
  line-height: 1.21rem;
  border-color: rgba(34, 34, 34, 0.15);
  border-width: 1px;
  border-radius: 6px;
  height: 40px;
  padding-left: 12px;
  padding-right: 36px;
  max-width: 100%;
  outline: 0;
  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
    border-width: 1px;
  }
  cursor: pointer;
  box-shadow: 0 0px 0px 0 rgba(34, 34, 34, 0.2),
    0 1px 12px 0 rgba(34, 34, 34, 0.2);
`;

const ProductTitle = styled.div`
  color: rgba(0, 0, 0, 0.81);
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 3rem;
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

const Input = styled.input`
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
  &:focus {
    border-color: #85b7d9;
  }
`;
