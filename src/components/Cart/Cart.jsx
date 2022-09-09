import React from "react";
import styles from "./Cart.module.scss";
import paperShoppingCart from "../../assets/shopping_cart.png";
import { useSelector, useDispatch } from "react-redux";
import CartDetails from "./CartDetails/CartDetails";
import Confirm from "./Confirm/Confirm";
import Checkout from "./Checkout/Checkout";
import { open, toggle } from "../../redux/slices/backdrop";

const Cart = () => {
  const {
    productList: { cartProducts },
    backdrop: { isCartDetailsShow, isConfirmShow, isCheckoutShow },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const totalAmount = cartProducts.reduce(
    (prev, curr) => prev + curr.amount,
    0
  );
  const totalPrice = cartProducts.reduce(
    (prev, curr) => prev + curr.price * curr.amount,
    0
  );

  const onCartClickHandler = () => {
    if (cartProducts.length === 0 || isCheckoutShow) return;
    dispatch(toggle(["cartDetails"]));
  };

  const checkoutHandler = (e) => {
    if (totalAmount === 0) return;
    e.stopPropagation();
    dispatch(open(["checkout"]));
  };

  return (
    <div className={styles.container} onClick={onCartClickHandler}>
      {isCartDetailsShow && <CartDetails />}
      {isConfirmShow && <Confirm />}
      {isCheckoutShow && <Checkout />}

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
