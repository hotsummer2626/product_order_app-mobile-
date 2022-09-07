import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div className="appContainer">
      <ProductFilter />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
