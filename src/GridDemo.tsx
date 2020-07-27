import * as React from "react";
import "./styles.css";

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

  return (
    <>
      <TwoColGrid />
      <br />
      <h4>Grid</h4>
      <div className="grid">
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
