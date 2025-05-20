"use client";
import React from "react";
import { ProductSummary } from "@/app/lib/types";
import styles from "./productCard.module.scss";
import { useState } from "react";
import Link from "next/link";
import { titleToId } from "@/app/lib/utils";

function ProductCard({ products }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);



  return (
    <div className={styles.wrapper}>
      {products.map((prod: ProductSummary, index: number) => (
        <div
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={index}
        >
          <p>MORE COLORS +</p>
          <div>
            <Link href={`/products/${titleToId(prod.title)}`}>
              <img src={prod.imageUrl} alt={prod.title} />
            </Link>
            {hoveredIndex === index && <button>ADD TO CART</button>}
          </div>
          <p>{prod.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
