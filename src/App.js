import { Fragment, useState } from "react";

import Header from "./components/header/Header";
import Main from "./components/body/Main";
import Cart from "./components/header/Cart/Cart";
import Footer from "./components/footer/Footer.js";
import "./App.css";

function App() {
  const [cartIsShow, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      <Cart />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
