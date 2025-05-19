"use client"
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "@/app/lib/utils";
import Cart from "../Cart/Cart";
import { addExistingProduct, removeProduct, removeExistingProduct } from "@/app/lib/cartSlice";

function Navbar() {
  const dispatch = useAppDispatch();
  const remove = (id: string) => dispatch(removeProduct(id));
  const addCounter = (id: string) => dispatch(addExistingProduct({id: id, quantity: 1}))
  const subtractCounter = (id: string) => dispatch(removeExistingProduct({id: id, quantity: 1}))

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link href="/products">logo</Link>
          <Link href="#">NEW ARRIVALS</Link>
          <Link href="#">BEST-SELLERS</Link>
          <Link href="#">CUSTOM</Link>
          <Link href="#">HANDBAGS</Link>
          <Link href="#">SMOKING ACCESSORIES</Link>
          <Link href="#">HOME DECOR</Link>
          <Link href="#">SALE</Link>
          <Link href="#">ABOUT</Link>
        </div>
        <div>
          <button>
            <FaSearch size={24} />
          </button>
          <Cart remove={remove} addCount={addCounter} subtractCount={subtractCounter} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
