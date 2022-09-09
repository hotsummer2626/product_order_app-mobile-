import React from "react";
import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const {
    productList: { filterProducts },
  } = useSelector((state) => state);
  return (
    <div className={styles.container}>
      {filterProducts.length !== 0 ? (
        filterProducts.map((product) => (
          <ProductItem key={product.id} product={product}/>
        ))
      ) : (
        <div className={styles.noFound}>No Products have been found!!!</div>
      )}
    </div>
  );
};

export default ProductList;
