import React from "react";
import styles from "./Cart.module.scss";
import paperShoppingCart from "../../assets/shopping_cart.png";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.shoppingCartIcon}>
        <img src={paperShoppingCart} alt="paper shopping bag" />
      </div>
      <div className={styles.totalPrice}>
        <span className={styles.price}>123</span>
      </div>
      <div className={styles.buttons}>
        <button className={styles.checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
