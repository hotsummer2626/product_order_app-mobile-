import React from "react";
import styles from "./Confirm.module.scss";
import Backdrop from "../../Backdrop/Backdrop";
import { useDispatch } from "react-redux";
import { clearAllProductFromCart } from "../../../redux/slices/productList";
import { close } from "../../../redux/slices/backdrop";

const Confirm = () => {
  const dispatch = useDispatch();

  const confirmHandler = () => {
    dispatch(clearAllProductFromCart());
    dispatch(close(["confirm",'cartDetails']));
  };
  return (
    <Backdrop className={styles.confirmOuter} isPropagation={false}>
      <div className={styles.container}>
        <h2>Really want to clear cart?</h2>
        <div className={styles.buttonGroup}>
          <button
            className={styles.cancel}
            onClick={() => dispatch(close(["confirm"]))}
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
