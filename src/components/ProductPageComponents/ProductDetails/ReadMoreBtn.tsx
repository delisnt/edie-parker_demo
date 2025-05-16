"use client";
import { useState } from "react";

function ReadMoreBtn() {
  const [btnClicked, setBtnClicked] = useState(false);

  const handleBtnClick = () => {
    setBtnClicked((prev) => !prev);
  };
  return (
    <>
      {btnClicked && (
        <p>
          Due to sanitary reasons, this item is FINAL SALE. Not for tobacco use.
          WARNING: Cancer and Reproductive Harm -{" "}
          <a href="#">www.P65Warnings.ca.gov</a>
        </p>
      )}
      <span>
        <a onClick={handleBtnClick}>
          READ MORE
        </a>
      </span>
    </>
  );
}

export default ReadMoreBtn;
