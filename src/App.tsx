import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { GridBox } from "./GridDemo";
import { ProductDetail } from "./product/ProductDetail";
import { GrMenu } from "react-icons/gr";
import { Box } from "@chakra-ui/core";
import { HowItWorks } from "./howitworks/HowItWorks";
import "./GridDemo";
import "./navbar-styles.css";
import "./styles.css";
// import styled from "styled-components";
// const color = "brown";

export default function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={GridBox} />
          <Route path="/how" exact component={HowItWorks} />
          <Route path="/about" exact component={About} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/productdetail" exact component={ProductDetail} />
        </Switch>
      </div>
    </main>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}
function Faq() {
  return (
    <div>
      <h2>FAQ Page</h2>
    </div>
  );
}

function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(252,252,252)" }}>
      <div className="site-header-news">
        <p className="site-announcement-message">
          Winter sale. All items 20% off. Sale ends never (maybe).
        </p>
      </div>
      <div className="site-header">
        <div className="nav-container">
          <div className="logo-container">Logo</div>
          <div className="link-container">
            <Link className="site-nav-link" to="/">
              shop now
            </Link>

            <Link className="site-nav-link" to="/how">
              how it works
            </Link>

            <Link className="site-nav-link" to="/faq">
              faq
            </Link>

            <Link className="site-nav-link" to="/about">
              About Us
            </Link>

            <Link className="site-nav-link" to="/cart">
              cart
            </Link>
          </div>
          <Box className="mobile-container" as={GrMenu} w="33px" h="33px" />
        </div>
      </div>
    </div>
  );
}
