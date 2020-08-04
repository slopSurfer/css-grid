import * as React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { GridBox } from "./GridDemo";
import { ProductDetail } from "./product/ProductDetail";
import "./styles.css";
import "./GridDemo";
import "./navbar-styles.css";

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
    <div className="nav-header">
      <div className="nav-container">
        <Link className="nav-item" to="/">
          Home{" "}
        </Link>

        <Link className="nav-item" to="/product">
          {" "}
          Product{" "}
        </Link>

        <Link className="nav-item" to="/productdetail">
          {" "}
          Product Details{" "}
        </Link>

        <Link className="nav-item" to="/about">
          {" "}
          About Us{" "}
        </Link>
      </div>
    </div>
  );
}
