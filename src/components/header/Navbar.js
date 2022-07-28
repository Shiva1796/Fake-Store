import { Fragment } from "react";

import classes from "./Navbar.module.css";
import HeaderCartButton from "./Cart/HeaderCartButton";

const Navbar = (props) => {
  return (
    <Fragment>
      <div className={classes["nav-body"]}>
        <div className={classes.logo}>‽ The Random Store ‽</div>
        <div className={classes.services}>
          <a id="home">Home</a>
          <a id="about">About</a>
          <a id="products">Products</a>
        </div>
        <HeaderCartButton className={classes.cart} onClick={props.onShowCart} />
      </div>
    </Fragment>
  );
};

export default Navbar;
