import { useEffect, useState } from "react";
import ProductFormat from "./ProductFormat";

import classes from "./Products.module.css";

const Products = (props) => {
  const [products, setLoadedProducts] = useState([]);
  useEffect(() => {
    const FetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseData = await response.json();

      const loadedProducts = [];
      for (const id in responseData) {
        loadedProducts.push({
          id: id,
          name: responseData[id].title,
          price: responseData[id].price,
          category: responseData[id].category,
          description: responseData[id].description,
          image: responseData[id].image,
        });
      }
      setLoadedProducts(loadedProducts);
      console.log(loadedProducts);
    };
    FetchProducts();
  }, []);

  const productList = products.map((product) => (
    <ProductFormat
      key={product.id}
      title={product.name}
      price={product.price}
      category={product.category}
      description={product.description}
      image={product.image}
    />
  ));

  return (
    <div>
      <ul className={classes.products}>{productList}</ul>
    </div>
  );
};

export default Products;
