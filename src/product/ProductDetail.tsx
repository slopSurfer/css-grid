import * as React from "react";
import styled from "styled-components";

export const ProductDetail = () => {
  return (
    <div>
      {/* <Title>Product Details</Title>   */}
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

const Column = styled.div`
  /* padding-left: 5%; */
  /* padding-right: 5%; */
`;

const ProductTitle = styled.div`
  color: rgba(0, 0, 0, 0.81);
  font-size: 2.5rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
  }
`;
const ProductImage = styled.img`
  /* import to keep <ims> centered in column */
  margin: auto;
  /* --------- */
  max-height: 60vh;
`;

// const Title = styled.h1`
//   color: rgba(0, 0, 0, 0.8);
//   font-size: 1.7rem;
//   font-weight: 400;
//   text-align: center;
//   margin-top: 20px;
//   margin-bottom: 20px;
// `;
