import React from "react";
import { ProductDetailsProps } from "@/types";

function ProductDetails({ title, subtitle, description }: ProductDetailsProps) {
  return (
    <>
      <h2>{title}</h2>
      <span>{subtitle}</span> 
      <button>ADD TO CART</button>
      <p>{description}</p>
      <button>READ MORE</button>
    </>
  );
}

export default ProductDetails;
