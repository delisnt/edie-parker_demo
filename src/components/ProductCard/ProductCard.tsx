"use client";
import React from "react";
import { ProductSummary } from "@/app/lib/types";
import styles from "./productCard.module.scss";
import { useState } from "react";
import Link from "next/link";
import { titleToId } from "@/app/lib/utils";

function ProductCard({ products }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("touch");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className={styles.wrapper}>
      {products.slice(0, 3).map((prod: ProductSummary, index: number) => {
        return (
          <div key={`id: ${prod.title}`}>
            <p>MORE COLORS +</p>
            <div>
              <Link href={`/products/${titleToId(prod.title)}`}>
                <img
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  src={prod.imageUrl}
                  alt="product img"
                />
              </Link>
            </div>
            {isHovered && <button>ADD TO CART</button>}
            <p>{prod.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
