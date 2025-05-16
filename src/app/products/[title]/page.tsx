"use client";
import { usePathname, useParams } from "next/navigation";
import products from "../../../mockProducts.json";
import productDetails from "../../../mockProductsDetails.json";
import styles from "./singleProd.module.scss";
import { titleToString, useAppDispatch, useAppSelector } from "@/app/lib/utils";
import Accordion from "@/components/ProductPageComponents/Accordion/Accordion";
import ProductDetails from "@/components/ProductPageComponents/ProductDetails/ProductDetails";
import SuggestedProduct from "@/components/ProductPageComponents/SuggestedProducts/SuggestedProducts";
import { createMockData } from "@/mockFactory";
import { useEffect, useState } from "react";
import { addProduct, addExistingProduct } from "@/app/lib/cartSlice";

export default function Page() {
  const path = usePathname();
  const params = useParams();
  const title = titleToString(params.title);
  const mockData = createMockData(productDetails);
  const [products, setProducts] = useState([]);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const prodIds = cart.cartContent.map((prod) => prod.id);
  console.log(prodIds);

  const addToCart = () => {
    if (prodIds.find((id) => id === params.title)) {
      dispatch(
        addExistingProduct({
          id: params.title,
          quantity: 1,
        })
      );
    } else {
      dispatch(
        addProduct({
          title: matchProd?.title,
          price: matchProd?.price,
          imgUrl: matchProd?.imageGallery[0],
          id: params.title,
          quantity: 1,
        })
      );
    }
  };
  console.log(cart)


  useEffect(() => {
    mockData()
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err.message);
        // handle error state
      });
  }, []);

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
        <div className={styles.breadcrumb}>
          <span>home{path}</span>
        </div>
        {matchProd && (
          <ProductDetails
            onClick={addToCart}
            description={matchProd?.description}
            title={matchProd?.title}
            subtitle={matchProd?.subtitle}
            price={matchProd.price}
          ></ProductDetails>
        )}
        <Accordion details={matchProd?.details}></Accordion>
        <div className={styles.spacer}>
          <span>PERFECT MATCH WITH...</span>
        </div>
        <div className={styles.wrapper} data-container="suggested">
          {matchProd?.relatedProducts.map((prod, index) => (
            <SuggestedProduct
              title={prod.title}
              price={prod.price}
              imageUrl={prod.imageUrl}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
