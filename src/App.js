import { Fragment, useState } from "react";

import Navbar from "./components/header/Navbar";
import Main from "./components/body/Main";
import Cart from "./components/header/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Footer from "./components/footer/Footer.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <Main />
      <Footer />
    </CartProvider>
  );
}

export default App;
