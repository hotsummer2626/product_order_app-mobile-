import React from "react";
import styles from "./ProductItem.module.scss";
import { products } from "../../../products/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={products[0].img} alt="baby formula" />
      </div>
      <div className={styles.infoWrapper}>
        <h2>a2 step 1</h2>
        <div className={styles.description}>
          <p>{products[0].description}</p>
        </div>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>243</span>
          <div className={styles.buttonGroup}>
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={styles.amount}>6</span>
            <button className={styles.add}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
