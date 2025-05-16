import { ProductDetailsProps } from "@/app/lib/types";
import styles from "./ProductDetails.module.scss";
import ReadMoreBtn from "./ReadMoreBtn";

function ProductDetails({
  title,
  subtitle,
  description,
  price,
  onClick,
}: ProductDetailsProps) {

  
  return (
    <>
      <div className={styles.wrapper}>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <button className={styles.btn} onClick={onClick}>
          <span>${price}</span>ADD TO CART
        </button>
        <p>{description}</p>
        <div className={styles.readMoreBtn}>
          <ReadMoreBtn  />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
