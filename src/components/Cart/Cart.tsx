"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import styles from "./Cart.module.scss";
import { CiShoppingCart } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { formatter } from "@/app/lib/utils";
import { useAppSelector } from "@/app/lib/utils";

const Cart: React.FC = ({ remove, addCount, subtractCount }) => {
  const [open, setOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  console.log(cart.cartContent);

  const cartPrices = cart.cartContent.map((prod) => {
    let totalPrice = prod.price;
    if (prod.quantity > 1) {
      totalPrice = prod.quantity * prod.price;
    }
    return totalPrice;
  });

  const pricesSum = cartPrices.reduce((sum, a) => {
    return sum + a;
  }, 0);

  console.log(cartPrices);
  console.log(pricesSum);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={showDrawer}>
        <CiShoppingCart size={24} />
      </button>
      <Drawer
        rootStyle={{ position: "absolute", top: "44px" }}
        closable={false}
        onClose={onClose}
        open={open}
        mask={false}
        styles={{
          body: { border: "1px solid black", padding: 0 },
          header: { borderLeft: "1px solid black" },
        }}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>CART</span>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-label="Close Drawer"
            >
              <GrClose />
            </button>
          </div>
        }
      >
        <div className={styles.cartBody}>
          <div className={styles.cartProductsBody}>
            {cart &&
              cart.cartContent.map((prod) => (
                <div className={styles.cartProduct} key={prod.title}>
                  <img src={prod.imgUrl} alt="product image" />
                  <div className={styles.innerCartProduct}>
                    <div>
                      <p>{prod.title}</p>
                      <span>
                        <b>{"$" + prod.price}</b>
                      </span>
                    </div>
                    <span>
                      <div className={styles.innerCartButtons}>
                        <div className={styles.counter}>
                          <button onClick={() => subtractCount(prod.id)}>
                            -
                          </button>
                          <span>{prod.quantity}</span>
                          <button onClick={() => addCount(prod.id)}>+</button>
                        </div>
                        <span onClick={() => remove(prod.id)}>DELETE</span>
                      </div>
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.innerCartEnd}>
            <div>
              <div className={styles.innerCartEndTax}>
                <span>TAX</span>
                <span>To be calculated at checkout</span>
              </div>
              <div className={styles.innerCartEndTax}>
                <span>Subtotal</span>
                <span>{formatter.format(pricesSum)}</span>
              </div>
            </div>
            <button>CONTINUE TO CHECKOUT</button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
