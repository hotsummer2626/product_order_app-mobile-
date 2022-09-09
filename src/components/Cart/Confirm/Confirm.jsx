import React from "react";
import styles from "./Confirm.module.scss";
import Backdrop from "../../Backdrop/Backdrop";
import { useDispatch } from "react-redux";
import { clearAllProductFromCart } from "../../../redux/slices/productList";

const Confirm = ({ setIsConfirmShow, setIsCartDetailsShow }) => {
  const dispatch = useDispatch();

  const confirmHandler = () => {
    dispatch(clearAllProductFromCart());
    setIsConfirmShow(false);
    setIsCartDetailsShow(false);
  };
  return (
    <Backdrop className={styles.confirmOuter} isPropagation={false}>
      <div className={styles.container}>
        <h2>Really want to clear cart?</h2>
        <div className={styles.buttonGroup}>
          <button
            className={styles.cancel}
            onClick={() => setIsConfirmShow(false)}
          >
            Cancel
          </button>
          <button className={styles.confirm} onClick={confirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
