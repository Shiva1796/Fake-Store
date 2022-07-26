import classes from "./Products.module.css";

const ProductFormat = (props) => {
  return (
    <li>
      <div>
        <h3>{props.title}</h3>
        <div>$ {props.price}</div>
        <div>{props.description}</div>
        <img src={props.image}></img>
      </div>
    </li>
  );
};

export default ProductFormat;
