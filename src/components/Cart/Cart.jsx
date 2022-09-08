import React from "react";
import styles from "./Cart.module.scss";
import paperShoppingCart from "../../assets/shopping_cart.png";
import { useSelector } from "react-redux";

const Cart = () => {
  const {
    productList: { cartProducts },
  } = useSelector((state) => state);

  const totalAmount = cartProducts.reduce(
    (prev, curr) => prev + curr.amount,
    0
  );
  const totalPrice = cartProducts.reduce(
    (prev, curr) => prev + curr.price * curr.amount,
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.shoppingCartIcon}>
        <img src={paperShoppingCart} alt="paper shopping bag" />
      </div>
      <div className={styles.totalAmount}>{totalAmount}</div>
      <div className={styles.totalPrice}>
        {totalAmount === 0 ? (
          <span className={styles.noItems}>No Items</span>
        ) : (
          <span className={styles.price}>{totalPrice.toFixed(1)}</span>
        )}
      </div>
      <div className={styles.buttons}>
        <button
          className={`${styles.checkout} ${
            totalAmount === 0 ? styles.disable : ""
          }`}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
