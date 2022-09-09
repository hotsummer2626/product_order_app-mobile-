import React from "react";
import styles from "./ProductItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../redux/slices/productList";
import { close } from "../../redux/slices/backdrop";

const ProductItem = ({ product, hasDescription }) => {
  const { name, img, description, price, amount } = product;
  const {
    productList: { cartProducts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeProductHandler = () => {
    dispatch(removeProductFromCart(product));
    const totalAmount = cartProducts.reduce(
      (prev, curr) => prev + curr.amount,
      0
    );
    if (totalAmount === 1) {
      dispatch(close(["cartDetails"]));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={img} alt="baby formula" />
      </div>
      <div className={styles.infoWrapper}>
        <h2>{name}</h2>
        <div className={styles.description}>
          {hasDescription && <p>{description}</p>}
        </div>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{price}</span>
          <div className={styles.buttonGroup}>
            {amount !== 0 ? (
              <>
                <button onClick={removeProductHandler}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className={styles.amount}>{amount}</span>
              </>
            ) : (
              <>
                <div></div>
                <div></div>
              </>
            )}
            <button
              className={styles.add}
              onClick={() => dispatch(addProductToCart(product))}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
