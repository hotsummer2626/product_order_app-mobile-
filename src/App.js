import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import ProductFilter from "./components/ProductFilter/ProductFilter";

const App = () => {
  return (
    <div className="appContainer">
      <ProductFilter />
      <ProductList />
    </div>
  );
};

export default App;
