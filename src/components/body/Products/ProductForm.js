import classes from "./ProductForm.module.css";
import Input from "../../UI/Input";

const ProductForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
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
    </form>
  );
};

export default ProductForm;
