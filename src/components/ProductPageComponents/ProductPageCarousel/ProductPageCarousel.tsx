import React from "react";
import { Carousel } from "antd";



const ProductPageCarousel: React.FC = ({ imgUrl, alternativeImgUrl}) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel arrows={true} afterChange={onChange}>
        <div>
          <img src={imgUrl} alt="carousel img 1" />
        </div>
        <div>
          <img src={alternativeImgUrl} alt="carousel img 2" />
        </div>
    </Carousel>
  );
};

export default ProductPageCarousel;
