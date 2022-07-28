import { Fragment } from "react";

import classes from "./Navbar.module.css";
import HeaderCartButton from "./Cart/HeaderCartButton";

const Navbar = (props) => {
  return (
    <Fragment>
      <div className={classes["nav-body"]}>
        <div className={classes.logo}>
          <span className={classes.color}>‽</span> The Rand
          <span className={classes.color}>o</span>m St
          <span className={classes.color}>o</span>re{" "}
          <span className={classes.color}>‽</span>
        </div>
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
