import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { GridBox } from "./GridDemo";
import { ProductDetail } from "./product/ProductDetail";
import "./styles.css";
import "./GridDemo";
import "./navbar-styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Box } from "@chakra-ui/core";

export default function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={GridBox} />
          <Route path="/productdetail" exact component={ProductDetail} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </main>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
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
            <Link className="site-nav-link" to="/product">
              shop now
            </Link>

            <Link className="site-nav-link" to="/productdetail">
              how it works
            </Link>

            <Link className="site-nav-link" to="/">
              faq
            </Link>

            <Link className="site-nav-link" to="/about">
              About Us
            </Link>

            <Link className="site-nav-link" to="/">
              cart
            </Link>
          </div>
          <Box
            className="mobile-container"
            as={GiHamburgerMenu}
            w="35px"
            h="100%"
          />
        </div>
      </div>
    </div>
  );
}
