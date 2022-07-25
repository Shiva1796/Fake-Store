import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes["nav-body"]}>
      <div className={classes.logo}>Logo</div>
      <div className={classes.services}>
        <a id="home">Home</a>
        <a id="about">About</a>
        <a id="products">Products</a>
        <a id="contact">Cart</a>
      </div>
    </div>
  );
};

export default Navbar;
