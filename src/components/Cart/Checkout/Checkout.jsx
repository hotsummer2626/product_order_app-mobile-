import React from "react";
import styles from "./Checkout.module.scss";
import Backdrop from "../../Backdrop/Backdrop";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Checkout = ({ setIsCheckoutShow, setIsCartDetailsShow }) => {
  const {
    productList: { cartProducts },
  } = useSelector((state) => state);

  const totalPrice = cartProducts.reduce(
    (prev, curr) => prev + curr.price * curr.amount,
    0
  );

  return (
    <Backdrop className={styles.checkoutOuter}>
      <div
        className={styles.closeIcon}
        onClick={() => setIsCheckoutShow(false)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={styles.checkoutDetailsWrapper}>
        <header>
          <h2>Cart Details</h2>
        </header>
        <div className={styles.checkoutList}>
          {cartProducts.map((product) => (
            <CheckoutItem
              product={product}
              setIsCheckoutShow={setIsCheckoutShow}
              setIsCartDetailsShow={setIsCartDetailsShow}
            />
          ))}
        </div>
        <footer>
          <div>
            Total:&nbsp;&nbsp;
            <span>{totalPrice.toFixed(1)}</span>
          </div>
        </footer>
      </div>
    </Backdrop>
  );
};

export default Checkout;
