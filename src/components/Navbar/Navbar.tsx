import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";


function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        {/* logo */}
        <div>
          <Link href='/products'>logo</Link>
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
          <button><FaSearch size={24}/></button>
          <button><CiShoppingCart size={24}/> </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
