import classes from "./ProductFormat.module.css";

const ProductFormat = (props) => {
  return (
    <li className={classes.format}>
      <div className={classes.productFormat}>
        <img className={classes.image} src={props.image}></img>
        <h3 className={classes.title}>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
      </div>
      <div>
        <span className={classes.addToCart}>
          <div className={classes.price}>$ {props.price}</div>
          <button className={classes.add}> + Add to Cart</button>
        </span>
      </div>
    </li>
  );
};

export default ProductFormat;
