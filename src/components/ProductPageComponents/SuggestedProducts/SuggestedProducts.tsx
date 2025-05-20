import { SuggestedProductProps } from "@/app/lib/types";
import styles from "./suggestedProducts.module.scss";
import {
  formatter,
  cutAfterSlash,
  titleToId,
} from "@/app/lib/utils";
import Link from "next/link";


function SuggestedProduct({ imageUrl, price, title, onChange, isChecked }: SuggestedProductProps) {
  const formattedTitle = cutAfterSlash(title);
  const prodId = titleToId(title);


  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="suggested product image" />
      <div className={styles.innerCardMiddle}>
        <Link href={prodId}><span>{formattedTitle}</span></Link>
        <label className={styles.container}>
          <input
            type="checkbox"
            checked={!!isChecked[prodId]}
            name={prodId}
            onChange={() => onChange()}
          />
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
