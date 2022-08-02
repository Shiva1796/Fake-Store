import { useRef, useState } from "react";
import classes from "./ProductForm.module.css";
import Input from "../../UI/Input";

const ProductForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(amountInputRef);

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 20
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "20",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isValid && (
        <p>Please enter a valid amount, you cannot more than 20 per item.</p>
      )}
    </form>
  );
};

export default ProductForm;
