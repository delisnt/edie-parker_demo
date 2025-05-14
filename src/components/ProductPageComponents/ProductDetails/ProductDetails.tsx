import React from "react";
import { ProductDetailsProps } from "@/types";
import styles from "./ProductDetails.module.scss"
import { formatter } from "@/utils";

function ProductDetails({
  title,
  subtitle,
  description,
  price
}: ProductDetailsProps) {

  return (
    <>
      <div className={styles.wrapper}>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <button className={styles.btn}><span>{formatter.format(price)}</span>ADD TO CART</button>
        <p>{description}</p>
        <span className={styles.readMoreBtn}>READ MORE</span>
      </div>
    </>
  );
}

export default ProductDetails;
