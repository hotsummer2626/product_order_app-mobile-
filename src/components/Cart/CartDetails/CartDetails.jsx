import React from "react";
import styles from "./CartDetails.module.scss";
import Backdrop from "../../Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "../../ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../../redux/slices/backdrop";

const CartDetails = () => {
  const {
    productList: { cartProducts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClickCartDetailsHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <Backdrop isPropagation={true}>
      <div className={styles.container} onClick={onClickCartDetailsHandler}>
        <div className={styles.header}>
          <h2>Cart Details</h2>
          <div
            className={styles.clearCart}
            onClick={() => dispatch(open(["confirm"]))}
          >
            <FontAwesomeIcon icon={faTrashCan} />
            <span>Clear Cart</span>
          </div>
        </div>
        <div className={styles.cartList}>
          {cartProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              hasDescription={false}
            />
          ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CartDetails;
