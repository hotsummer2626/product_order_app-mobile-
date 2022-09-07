import React from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "./ProductItem/ProductItem";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
