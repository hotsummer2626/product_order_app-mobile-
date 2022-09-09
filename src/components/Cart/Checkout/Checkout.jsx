import React from "react";
import styles from "./Checkout.module.scss";
import Backdrop from "../../Backdrop/Backdrop";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../../../redux/slices/backdrop";

const Checkout = ({ setIsCheckoutShow, setIsCartDetailsShow }) => {
  const {
    productList: { cartProducts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const totalPrice = cartProducts.reduce(
    (prev, curr) => prev + curr.price * curr.amount,
    0
  );

  return (
    <Backdrop className={styles.checkoutOuter} isPropagation={false}>
      <div className={styles.closeIcon}>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => dispatch(close(["checkout"]))}
        />
      </div>
      <div className={styles.checkoutDetailsWrapper}>
        <header>
          <h2>Cart Details</h2>
        </header>
        <div className={styles.checkoutList}>
          {cartProducts.map((product) => (
            <CheckoutItem key={product.id} product={product} />
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
