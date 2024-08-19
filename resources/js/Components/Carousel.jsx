import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Rating from "./Rating";

const Carousel = ({ latestProduct }) => {
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

    return (
        <div className="w-full max-w-4xl mx-auto flex justify-center flex-col">
            <span className="inline my-5 mx-auto font-semibold text-gray-700 text-lg">
                Recent Products
            </span>
            <Slider {...settings}>
                {latestProduct.map((product) => (
                    <div
                        key={product.id}
                        className="container w-full mx-auto p-10"
                    >
                        <div className="sm:flex justify-evenly items-center lg:flex-row">
                            <div className="w-full lg:w-3/5 lg:pl-10">
                                <h1 className="text-2xl font-bold text-red-500 mb-4">
                                    {product.title}
                                </h1>
                                <div className="flex items-center mb-4">
                                    <span className="text-xl text-gray-800 font-semibold">
                                        {product.price} Ks
                                    </span>
                                </div>
                                <div className="my-5 flex justify-start items-center">
                                    <span className="text-base text-gray-500">
                                        Total Order: {product.city}
                                    </span>
                                    <span className="ms-10">
                                        <Rating
                                            rating={product.rating}
                                            totalStars={product.totalStars}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/5">
                                <img
                                    className="w-full h-full"
                                    src={product.photo}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
