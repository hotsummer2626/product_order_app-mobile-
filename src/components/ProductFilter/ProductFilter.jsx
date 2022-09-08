import React from "react";
import styles from "./ProductFilter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setProductListByKeyWord } from "../../redux/slices/productList";

const ProductFilter = () => {
  const dispatch = useDispatch();
  const searchHandler = (e) =>
    dispatch(setProductListByKeyWord(e.target.value));

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        placeholder="Search Product Name"
        onChange={searchHandler}
      />
    </div>
  );
};

export default ProductFilter;
