import React from "react";
import styles from "./CheckoutItem.module.scss";
import { products } from "../../../../products/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../../../redux/slices/productList";

const CheckoutItem = ({ product, setIsCheckoutShow, setIsCartDetailsShow }) => {
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
      setIsCheckoutShow(false);
      setIsCartDetailsShow(false);
    }
  };

  const subTotalPrice = (product.price * product.amount).toFixed(1);
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={products[0].img} alt="baby formula" />
      </div>
      <div className={styles.checkoutDetails}>
        <h2>{product.name}</h2>
        <div className={styles.priceWrapper}>
          <div className={styles.buttonGroup}>
            <button onClick={removeProductHandler}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={styles.amount}>{product.amount}</span>
            <button
              className={styles.add}
              onClick={() => dispatch(addProductToCart(product))}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <span className={styles.subTotalPrice}>{subTotalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
