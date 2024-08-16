import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Rating from "./Rating";

const Carousel = () => {
  const settings = {
    dots: true,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  const CarouselProducts = [
    {
      id: 1,
      name: "Bed King Size",
      price: 10000,
      order: 230,
      rate: 3,
      totalStar: 5
    },
    {
      id: 2,
      name: "provident",
      price: 12000,
      order: 243,
      rate: 5,
      totalStar: 5
    },
    {
      id: 3,
      name: "nesciunt",
      price: 9000,
      order: 435,
      rate: 4,
      totalStar: 5
    },
    {
      id: 4,
      name: "debitis",
      price: 15000,
      order: 521,
      rate: 5,
      totalStar: 5
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto flex justify-center flex-col">
      <span className="inline my-5 mx-auto font-semibold text-gray-700 text-lg">Popular Products</span>
      <Slider {...settings}>
        {CarouselProducts.map((product) => (
          <div key={product.id} className="container w-full mx-auto p-10">
            <div className="flex justify-evenly items-center flex-col lg:flex-row">
              <div className="w-full lg:w-3/5 lg:pl-10">
                <h1 className="text-2xl font-bold text-red-500 mb-4">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <span className="text-xl text-gray-800 font-semibold">{product.price} Ks</span>
                </div>
                <div className="mt-5 flex justify-start items-center">
                  <span className="text-base text-gray-500">Total Order: {product.order}</span>
                  <span className="ms-10"><Rating rating={product.rate} totalStars={product.totalStar} /></span>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <img className='w-full h-full' src="/img/blog.jpeg" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;