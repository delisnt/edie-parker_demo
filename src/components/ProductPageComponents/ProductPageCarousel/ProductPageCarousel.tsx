import React from "react";
import { Carousel } from "antd";

const ProductPageCarousel: React.FC = ({ imgs }) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel arrows={true} afterChange={onChange}>
      {imgs.map((img: string) => (
        <div>
          <img src={img} alt="carousel img" />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductPageCarousel;
