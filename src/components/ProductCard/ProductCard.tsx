"use client";
import React from "react";
import { ProductSummary } from "@/app/lib/types";
import styles from "./productCard.module.scss";
import Link from "next/link";
import { titleToId } from "@/app/lib/utils";
import { useAppDispatch, useAppSelector } from "@/app/lib/utils";
import { addExistingProduct, addProduct } from "@/app/lib/cartSlice";

function ProductCard({ products }) {
  const cart = useAppSelector((state) => state.cart);
  const cartProdIds = cart.cartContent.map((prod) => prod.id);
  const dispatch = useAppDispatch();
  const addProd = ({ title, price, imgUrl, id, quantity }) => {
    if (cartProdIds.find((itemId) => itemId === id)) {
      dispatch(
        addExistingProduct({
          id: id,
          quantity: 1,
        })
      );
    } else {
      dispatch(
        addProduct({ title: title, price: price, imgUrl, id: id, quantity: 1 })
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      {products.map((prod: ProductSummary, index: number) => (
        <div key={index}>
          <p>MORE COLORS +</p>
          <div className={styles.productCard}>
            <Link href={`/products/${titleToId(prod.title)}`}>
              <img src={prod.imageUrl} alt={prod.title} />
            </Link>
            <div className={styles.btn}>
              <button
                onClick={() =>
                  addProd({
                    title: prod.title,
                    price: prod.price,
                    imgUrl: prod.imageUrl,
                    quantity: 1,
                    id: titleToId(prod.title),
                  })
                }
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <p>{prod.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
