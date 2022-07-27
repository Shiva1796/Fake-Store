import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes["nav-body"]}>
      <div className={classes.logo}>‽ The Random Store ‽</div>
      <div className={classes.services}>
        <a id="home">Home</a>
        <a id="about">About</a>
        <a id="products">Products</a>
        <a id="cart">Cart 🛒</a>
      </div>
    </div>
  );
};

export default Navbar;
