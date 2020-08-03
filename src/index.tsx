import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider>
    <CSSReset />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  rootElement
);
