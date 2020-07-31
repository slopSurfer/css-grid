import * as React from "react";
import { useHistory } from "react-router-dom";
import "./card.css";

export const ProductCard = () => {
  const history = useHistory();
  function handleClick() {
    console.log("clicked");
    history.push("/productdetail");
    console.log("push");
  }
  return (
    <>
      <div
        className="card-product"
        style={{ cursor: "pointer" }}
        onClick={e => handleClick()}
      >
        <img
          className="product-image"
          alt="pic"
          src="https://i.etsystatic.com/23307682/c/2446/1944/0/940/il/bc9521/2442286069/il_340x270.2442286069_e5j4.jpg"
        />
        <div className="title text-base">Pet Portrait, Custom canvas</div>
        <div className="sub-title text-base">Pet Pawtraits studio</div>
        <div className="price-grid">
          <div className="product-price text-base">US $1.78</div>
          <div>
            <span className="price-discount text-base">US$2.99</span>
            <span className="price-discount-percent text-base">30% Off</span>
          </div>
        </div>
      </div>
    </>
  );
};
