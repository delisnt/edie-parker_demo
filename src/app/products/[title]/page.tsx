"use client";
import { usePathname, useParams, useRouter } from "next/navigation";
import productDetails from "../../../mockProductsDetails.json";
import styles from "./singleProd.module.scss";
import { titleToString } from "@/utils";
import Accordion from "@/components/ProductPageComponents/Accordion/Accordion";
import ProductDetails from "@/components/ProductPageComponents/ProductDetails/ProductDetails";
import SuggestedProduct from "@/components/ProductPageComponents/SuggestedProducts/SuggestedProducts";

export default function Page() {
  const path = usePathname();
  const params = useParams();
  const title = titleToString(params.title);

  const matchProd = productDetails.find((prod) => {
    const cleanTitle = title.toLowerCase().replace(/\s+/g, " ").trim();
    if (cleanTitle.includes(prod.title.toLocaleLowerCase())) {
      return prod;
    } else {
      return "Not Found";
    }
  });

  const suggestedProducts = matchProd?.relatedProducts.map((prod) => {

  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.container1}></div>
      <div className={styles.container2}>
        <span>home{path}</span>
        {matchProd && (
          <ProductDetails
            description={matchProd?.description}
            title={matchProd?.title}
            subtitle={matchProd?.subtitle}
          ></ProductDetails>
        )}
        <Accordion details={matchProd?.details}></Accordion>
        <div className={styles.wrapper} data-container='suggested'>
        {matchProd?.relatedProducts.map((prod) => (
          <SuggestedProduct title={prod.title} price={prod.price} imageUrl={prod.imageUrl}/>
        ))}
        </div>
      </div>
    </div>
  );
}
