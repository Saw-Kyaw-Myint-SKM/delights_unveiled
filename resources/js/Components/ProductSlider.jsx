import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CartContext } from "@/Layouts/context/CardContext";

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {products} = useContext(CartContext)

  return (
    <div className="max-w-4xl mx-auto my-10">
      <Slider {...settings}>
        <div className="flex items-center flex-row justify-between p-4 bg-gray-100 rounded-lg">
          <div className="w-3/6">
            <h3 className="text-xl font-bold text-gray-800">ABOUT ROGER</h3>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula libero vel nulla eleifend, at placerat arcu sagittis.
            </p>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="w-2/6">
            <img
              src="/img/original.png"
              alt="Hand holding a smartphone"
              className="w-48 h-auto"
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-8 bg-gray-100 rounded-lg">

        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;