"use client";
import { usePathname, useParams } from "next/navigation";
import productDetails from "../../../mockProductsDetails.json";
import styles from "./singleProd.module.scss";
import { titleToString } from "@/utils";
import Accordion from "@/components/ProductPageComponents/Accordion/Accordion";
import ProductDetails from "@/components/ProductPageComponents/ProductDetails/ProductDetails";
import SuggestedProduct from "@/components/ProductPageComponents/SuggestedProducts/SuggestedProducts";
import { createMockData } from "@/mockFactory";


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



  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={matchProd?.imageGallery[0]} alt="" />
      </div>
      <div className={styles.detailsContainer}>
        <span>home{path}</span>
        {matchProd && (
          <ProductDetails
            description={matchProd?.description}
            title={matchProd?.title}
            subtitle={matchProd?.subtitle}
            price={matchProd.price}
          ></ProductDetails>
        )}
        <Accordion details={matchProd?.details}></Accordion>
        <div className={styles.wrapper} data-container='suggested'>
        {matchProd?.relatedProducts.map((prod, index) => (
          <SuggestedProduct title={prod.title} price={prod.price} imageUrl={prod.imageUrl} key={index}/>
        ))}
        </div>
      </div>
    </div>
  );
}
