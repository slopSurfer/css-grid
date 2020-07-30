import * as React from "react";
import styled from "styled-components";

export const ProductDetail = () => {
  return (
    <div>
      <Title>Product Details</Title>
      <MainGrid>
        <ProductImage
          alt="pic"
          src="https://i.etsystatic.com/19375526/r/il/ce1a78/1752910912/il_1140xN.1752910912_ey4x.jpg"
        />
        {/* <div>hello</div> */}
        <div>hello</div>
      </MainGrid>
    </div>
  );
};

const MainGrid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(28rem, 32rem)); */
  grid-template-columns: 50% 50%;
  /* grid-template-rows: 50% 50%; */
  grid-gap: 1.5rem;
  row-gap: 1.5rem;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 765px) {
    grid-template-columns: 100%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  @media only screen and (min-width: 1440px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 100%;

  @media (max-width: 765px) {
    align-self: center;
    background-color: blue;
    width: 80%;
    max-height: 80%;
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
