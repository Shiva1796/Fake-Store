import { Fragment } from "react";

import Home from "./Home/Home";
import About from "./About/About";
import Products from "./Products/Products";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Products />
    </Fragment>
  );
};

export default Main;
