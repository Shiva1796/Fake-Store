import { useContext } from "react";
import classes from "./ProductFormat.module.css";
import ProductForm from "./ProductForm";
import CartContext from "../../../store/cart-context";

const ProductFormat = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCart = (amount) => {
    cartCtx.addItem({
      key: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.format}>
      <div className={classes.productFormat}>
        <img className={classes.image} src={props.image}></img>
        <h3 className={classes.title}>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
      </div>

      <div>
        <span className={classes.addToCart}>
          <div className={classes.price}>Price: $ {props.price}</div>
        </span>
        <ProductForm onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default ProductFormat;
