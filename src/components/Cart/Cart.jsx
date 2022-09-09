import React, { useState } from "react";
import styles from "./Cart.module.scss";
import paperShoppingCart from "../../assets/shopping_cart.png";
import { useSelector } from "react-redux";
import CartDetails from "./CartDetails/CartDetails";
import Confirm from "./Confirm/Confirm";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
  const [isCartDetailsShow, setIsCartDetailsShow] = useState(false);
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [isCheckoutShow, setIsCheckoutShow] = useState(false);
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

  const onCartClickHandler = () => {
    if (cartProducts.length === 0) return;
    setIsCartDetailsShow(!isCartDetailsShow);
  };

  const checkoutHandler = (e) => {
    if (totalAmount === 0) return;
    e.stopPropagation();
    setIsCheckoutShow(true);
  };

  return (
    <div className={styles.container} onClick={onCartClickHandler}>
      {isCartDetailsShow && (
        <CartDetails
          setIsCartDetailsShow={setIsCartDetailsShow}
          setIsConfirmShow={setIsConfirmShow}
        />
      )}
      {isConfirmShow && (
        <Confirm
          setIsConfirmShow={setIsConfirmShow}
          setIsCartDetailsShow={setIsCartDetailsShow}
        />
      )}
      {isCheckoutShow && (
        <Checkout
          setIsCheckoutShow={setIsCheckoutShow}
          setIsCartDetailsShow={setIsCartDetailsShow}
        />
      )}
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
          onClick={checkoutHandler}
        >
          {isCheckoutShow ? "Pay Now" : "Checkout"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
