import React from "react";
import styles from "./ProductItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({ name, img, description, price, amount }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={img} alt="baby formula" />
      </div>
      <div className={styles.infoWrapper}>
        <h2>{name}</h2>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{price}</span>
          <div className={styles.buttonGroup}>
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={styles.amount}>{amount}</span>
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
