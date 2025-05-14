import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        {/* logo */}
        <div>
        <span>logo</span>
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
          <button>Search</button>
          <button>Cart </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
