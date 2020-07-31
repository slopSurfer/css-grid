import * as React from "react";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";

const friendOptions = [
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
];

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
          <SelectPets>
            <option value="1">1 Pet</option>
            <option value="2">2 Pets</option>
            <option value="1">3 Pets</option>
            <option value="1">4 Pets</option>
          </SelectPets>
          {/*   <TomatoButton>
            <option value="1">1 Pet</option>
            <option value="2">2 Pets</option>
            <option value="1">3 Pets</option>
            <option value="1">4 Pets</option>
          </TomatoButton> */}
          <SubHeading>Size</SubHeading>
          <Dropdown
            style={{ marginTop: "0px" }}
            placeholder="Select number of pets"
            fluid
            selection
            options={friendOptions}
          />

          <br />
          <ButtonBasket>Add to Backet</ButtonBasket>
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
  /* background-color: blue; */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 5%;
    margin-right: 5%;
  }
  @media only screen and (min-width: 1440px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`;

const Column = styled.div``;

const ButtonBasket = styled.button`
  border-radius: 40px;
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.91);
  color: white;
`;

const SelectPets = styled.select`
  color: #222;
  text-indent: 5px;
  /* margin-top: 0px; */
  border-color: rgba(34, 34, 34, 0.15);
  border-width: 1px;
  border-radius: 6px;
  font-size: 16px;
  height: 40px;
  padding-left: 12px;
  padding-right: 36px;
  width: 100%;
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
  max-height: 60vh;
`;

const SubHeading = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.1rem;
  font-weight: 300;
  /* text-align: center; */
  margin-top: 10px;
  margin-bottom: 5px;
  /* margin-bottom: 20px; */
`;
