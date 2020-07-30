import * as React from "react";
import styled from "styled-components";

export const ProductDetail = () => {
  return (
    <div>
      <Title>Product Details</Title>
      <MainGrid>
        <Column style={{ backgroundColor: "red" }}>
          <ProductImage
            alt="pic"
            src="https://i.etsystatic.com/19375526/r/il/ce1a78/1752910912/il_1140xN.1752910912_ey4x.jpg"
          />
        </Column>
        <Column style={{ backgroundColor: "green" }}>
          <ProductTitle>
            Pet Portrait, Pet Portraits, Cat Watercolour, Dog Watercolour,
            Staffy Art, Custom Pet Portrait, Personalized Portrait, Staffy Lover
          </ProductTitle>
        </Column>
      </MainGrid>
    </div>
  );
};

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* justify-items: center; */
  /* justify-content: center; */
  grid-gap: 2rem;
  /* background-color: rgba(200, 90, 60, 0.2); */
  margin-left: 1%;
  margin-right: 1%;
  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (min-width: 1440px) {
    margin-left: 10%;
    margin-right: 10%;
    grid-gap: 2rem;
  }
`;

const Column = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

const ProductTitle = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 2.5rem;
  font-weight: 300;
  /* margin-top: 10px; */
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  @media (max-width: 765px) {
    /* background-color: blue; */
    /* padding-left: 5%; */
    /* padding-right: 5%; */
    max-width: 100%;
    max-height: 100%;
    /* max-width: 90%; */
    /* width: 90%; */
  }
`;

// const LeftColumn = styled.div`
//   grid-ro
// `;

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;
