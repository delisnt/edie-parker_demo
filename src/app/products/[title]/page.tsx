"use client";
import { usePathname, useParams } from "next/navigation";
import productDetails from "../../../mockProductsDetails.json";
import styles from "./singleProd.module.scss";
import {
  titleToId,
  titleToString,
  useAppDispatch,
  useAppSelector,
} from "@/app/lib/utils";
import Accordion from "@/components/ProductPageComponents/Accordion/Accordion";
import ProductDetails from "@/components/ProductPageComponents/ProductDetails/ProductDetails";
import SuggestedProduct from "@/components/ProductPageComponents/SuggestedProducts/SuggestedProducts";
import { createMockData } from "@/mockFactory";
import { useEffect, useState } from "react";
import {
  addProduct,
  addExistingProduct,
  removeProduct,
} from "@/app/lib/cartSlice";


export default function Page() {
  const path = usePathname();
  const params = useParams();
  const title = titleToString(params.title);
  const mockData = createMockData(productDetails);
  const [products, setProducts] = useState([]);
  const [isChecked, setIsChecked] = useState({});
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cartProdIds = cart.cartContent.map((prod) => prod.id);
  const [error, setError] = useState({ error: false, message: "" });

  useEffect(() => {
    mockData()
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        setError({ error: true, message: `Could not fetch product: ${err}` });
      });
  }, []);

  const matchProd = products.find((prod) => {
    try {
      const cleanTitle = titleToId(title);
      const cleanProdTitle = titleToId(`${prod.title} ${prod.subtitle}`);
      console.log(`Clean title: ${cleanTitle} prod title: ${cleanProdTitle}`);
      if (cleanTitle.includes(titleToId(cleanTitle))) {
        return prod;
      }
    } catch (error) {
      setError({ error: true, message: `Products not found: ${error}` });
    }
  });

  console.log(matchProd);

  const addCheckedProduct = (title, price, imageUrl, prodId) => {
    const alreadyChecked = !!isChecked[prodId];
    if (!alreadyChecked && prodId) {
      dispatch(
        addProduct({
          title: title,
          price: price,
          imgUrl: imageUrl,
          quantity: 1,
          id: prodId,
        })
      );
    } else {
      dispatch(removeProduct(prodId));
    }
    setIsChecked((prev) => ({
      ...prev,
      [prodId]: !alreadyChecked,
    }));
  };

  const addToCart = () => {
    try {
      if (cartProdIds.find((id) => id === params.title)) {
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
    } catch (error) {
      setError({
        error: true,
        message: `There was a problem with redux: ${error}`,
      });
    }
  };

  return (
    <>
      {!error.error ? (
        <div className={styles.wrapper}>
          <div className={styles.imgContainer}>
            {matchProd ? (
              <img src={matchProd?.imageGallery[0]} />
            ) : (
              <div className={styles.loading}>images are loading...</div>
            )}
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.breadcrumb}>
              <span>home{path}</span>
            </div>
            {matchProd ? (
              <ProductDetails
                onClick={addToCart}
                description={matchProd?.description}
                title={matchProd?.title}
                subtitle={matchProd?.subtitle}
                price={matchProd?.price}
                inStock={matchProd?.inStock}
              ></ProductDetails>
            ) : (
              <div>Loading product</div>
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
                  onChange={() =>
                    addCheckedProduct(
                      prod.title,
                      prod.price,
                      prod.imageUrl,
                      titleToId(prod.title)
                    )
                  }
                  isChecked={isChecked}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="error">
          {error.message}
          </div>
      )}
    </>
  );
}
