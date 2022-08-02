import { useContext } from "react";
import Modal from "../../UI/Modal.js";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          key: "99s",
          name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          amount: 1,
          price: 109.95,
        },
      ].map((item) => (
        <li key={item.key}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
