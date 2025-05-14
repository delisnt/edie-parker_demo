"use server";
import ProductCard from "@/components/ProductCard/ProductCard";
import products from "../../mockProducts.json";
import { createMockData } from "@/mockFactory";
import Link from "next/link";

function ProductsPage() {
  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}

export default ProductsPage;
