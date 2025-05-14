"use client";
import { usePathname, useParams } from "next/navigation";
import styles from "./singleProd.module.scss";
import { titleToString } from "@/utils";

export default function Page() {
  const router = usePathname();
  const params = useParams();
  const titlePage = titleToString(params.title);
  console.log(params);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container1}></div>
      <div className={styles.container2}>
        <span>home{router}</span>
        <h2>{titlePage}</h2>
        <span>...</span> {/* In patent black croc, stringa da tagliare */}
        <button> ADD TO CART</button>
      </div>
    </div>
  );
}
