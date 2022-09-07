import React from "react";
import styles from "./ProductFilter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ProductFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input type="text" placeholder="Search Product Name" />
    </div>
  );
};

export default ProductFilter;
