"use client";
import React from "react";
import { ProductSummary } from "@/app/lib/types";
import styles from "./productCard.module.scss";
import Link from "next/link";
import { titleToId } from "@/app/lib/utils";

function ProductCard({ products }) {
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
              <button>ADD TO CART</button>
            </div>
          </div>
          <p>{prod.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
