import ProductCard from "@/components/ProductCard/ProductCard";
import products from "../../mockProducts.json";
import styles from './Products.module.scss'

function ProductsPage() {
  return (
    <div>
      <div className={styles.productContainer}>
        <ProductCard products={products} />
      </div>
    </div>
  );
}

export default ProductsPage;
