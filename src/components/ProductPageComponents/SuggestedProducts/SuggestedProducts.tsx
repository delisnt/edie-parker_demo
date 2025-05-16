import { SuggestedProductProps } from "@/app/lib/types";
import styles from "./suggestedProducts.module.scss";
import { formatter, cutAfterSlash } from "@/app/lib/utils";

function SuggestedProduct({ imageUrl, price, title }: SuggestedProductProps) {
  const formattedTitle = cutAfterSlash(title);
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="suggested product image" />
      <div className={styles.innerCardMiddle}>
        <span>{formattedTitle}</span>
        <label className={styles.container}>
          <input type="checkbox" name="" id="" />
          <div className={styles.checkmark}></div>
          ADD TO PURCHASE
        </label>
      </div>
      <div className={styles.innerCardEnd}>
        <span>{formatter.format(price)}</span>
      </div>
    </div>
  );
}

export default SuggestedProduct;
