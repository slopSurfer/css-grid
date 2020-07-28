import * as React from "react";
import "./styles.css";
import { ProductCard } from "./ProductCard";
import { Banner } from "./Banner";

export const GridBox = () => {
  const BuildCard = () => {
    return (
      <div className="card">
        <div>Card</div>
        <div>The Product</div>
      </div>
    );
  };

  const TwoColGrid = () => {
    return (
      <>
        <h4>Two Column Grid</h4>
        <h5>Max 3 Cols of 300px</h5>
        <div className="two-col-grid">
          <div className="col">
            <BuildCard />
          </div>
          <div className="col">
            <BuildCard />
          </div>
          <div className="col">
            <BuildCard />
          </div>
          <div className="col">
            <BuildCard />
          </div>
          <div className="col">
            <BuildCard />
          </div>
          <div className="col">
            <BuildCard />
          </div>
          <div className="col">
            <BuildCard />
          </div>
          <div className="col">
            <BuildCard />
          </div>
        </div>
      </>
    );
  };

  const MaxThreeColGrid = () => {
    return (
      <>
        <div style={{ marginTop: "3rem" }} className="max-three-col-grid">
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Banner />
      <MaxThreeColGrid />
      <br />

      {/* <TwoColGrid /> */}

      {/* <br />
      <h4>Grid</h4>
      <h3>repeat(auto-fill, minmax(300px, 1fr)</h3> */}
      {/* <div className="grid"> */}
      {/*  <div className="col">
          <BuildCard />
        </div>
        <div className="col">
          <BuildCard />
        </div>
        <div className="col">
          <BuildCard />
        </div>
        <div className="col">
          <BuildCard />
        </div>
        <div className="col">
          <BuildCard />
        </div>
        <div className="col">
          <BuildCard />
        </div>
        <div className="col">
          <BuildCard />
        </div>
        <div className="col">
          <BuildCard />
        </div>
      </div> */}
    </>
  );
};
