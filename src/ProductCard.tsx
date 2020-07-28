import * as React from "react";
// import "./styles.css";
import "./card.css";

export const ProductCard = () => {
  return (
    <>
      <div className="card-product">
        <img
          className="product-image"
          alt="pic"
          src="https://i.etsystatic.com/23307682/c/2446/1944/0/940/il/bc9521/2442286069/il_340x270.2442286069_e5j4.jpg"
        />
        {/* <div className="product-image" /> */}
        <div className="title text-base">Pet Portrait, Custom canvas</div>
        <div className="sub-title text-base">Pet Pawtraits studio</div>
        <div className="price-grid">
          <div className="product-price text-base">US $1.78</div>
          <div style={{}}>
            <span className="price-discount text-base">US$2.99</span>
            <span className="price-discount-percent text-base">30% Off</span>
          </div>
          {/* <div className="price-discount-percent text-base">(30% off)</div> */}
        </div>
      </div>
    </>
  );
};
