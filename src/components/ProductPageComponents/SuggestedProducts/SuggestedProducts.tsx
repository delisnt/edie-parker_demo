import { SuggestedProductProps } from "@/app/lib/types";
import styles from "./suggestedProducts.module.scss";
import {
  formatter,
  cutAfterSlash,
  useAppSelector,
  useAppDispatch,
  titleToId,
} from "@/app/lib/utils";
import { addProduct, removeProduct } from "@/app/lib/cartSlice";
import { useState } from "react";

function SuggestedProduct({ imageUrl, price, title }: SuggestedProductProps) {
  const formattedTitle = cutAfterSlash(title);
  const prodId = titleToId(title);
  const [isChecked, setIsChecked] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  console.log(cart);

  const addCheckedProduct = () => {
    if (!isChecked) {
      dispatch(
        addProduct({
          title: title,
          price: price,
          imgUrl: imageUrl,
          quantity: 1,
          id: prodId
        })
      );
    } else {
      dispatch(removeProduct(prodId));
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="suggested product image" />
      <div className={styles.innerCardMiddle}>
        <span>{formattedTitle}</span>
        <label className={styles.container}>
          <input
            type="checkbox"
            checked={isChecked}
            id={prodId}
            onChange={() =>
              addCheckedProduct()
            }
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
