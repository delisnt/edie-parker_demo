"use client";
import React, { useState } from "react";
import { Drawer } from "antd";
import styles from './Cart.module.scss'
import { CiShoppingCart } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from "@/app/lib/utils";

const Cart: React.FC = () => {
  const [open, setOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  console.log(cart)

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
        title={""}
        closable={false}
        onClose={onClose}
        open={open}
        mask={false}
        styles={{
          body: { border: "1px solid black",},
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
        <div>
        {cart && cart.cartContent.map((prod) => (
            <div className={styles.cartProduct}>
                <img src={prod.imgUrl} alt="product image" />
                <p>{prod.title}</p>
                <span>{prod.price}</span>
                <span>{prod.quantity}</span>
            </div>  
        ))}
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
