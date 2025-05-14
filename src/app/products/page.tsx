"use server";
import ProductCard from "@/components/ProductCard/ProductCard";
import products from "../../mockProducts.json";


function ProductsPage() {
  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}

export default ProductsPage;
