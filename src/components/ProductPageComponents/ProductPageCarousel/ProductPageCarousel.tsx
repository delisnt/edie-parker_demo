import React from "react";
import { Carousel } from "antd";


const ProductPageCarousel: React.FC = ({ imgs }) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      {imgs.map((item) => (
        <div>
          <img src={item} alt="carousel img" />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductPageCarousel;
