import React, { useRef, useContext, useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/react";
import ProductCard from "@/Components/ProductCard";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import InfoCard from "@/Components/InfoCard ";
import Footer from "@/Components/Footer";
import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";
import { useForm } from "@inertiajs/react";
import Carousel from "@/Components/Carousel";

export default function Welcome({
    user,
    auth,
    isAuthenticated,
    laravelVersion,
    phpVersion,
    products,
    searchValue,
    categoryValue,
}) {
    const productRef = useRef(null);
    const [category, setCategory] = useState("");

    const handleScrollToProducts = () => {
        if (productRef.current) {
            productRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const {
        data: categoryData,
        setData: setcategoryData,
        get,
        processing: setCategoryProcessing,
        reset: categoryResult,
    } = useForm({
        category: "",
    });

    const handleCategoryChange = (category) => {
        categoryData.category = category;
        get(route("welcome"), {
            preserveScroll: true,
            onError: (errors) => {
                console.log("errors", errors);
            },
        });
    };
    useEffect(() => {
        if (categoryValue?.length) {
            setCategory(categoryValue);
        }
    }, []);

    return (
        <>
            <Head title="Delights Unveiled" />
            <WelcomLayout searchValue={searchValue} user={auth.user}>
                <section>
                    <Navbar />
                    <div className="w-full mx-auto h-[60vh] relative flex flex-col justify-end">
                        {/* Hero Video */}
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src="/video/hero.mp4"
                            autoPlay
                            loop
                            muted
                        />

                        {/* Dark Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

                        {/* Overlay Content */}
                        <header className="relative z-10 pl-16 pr-16 pt-5 pb-5">
                            <h1 className="text-base md:text-4xl font-bold text-white">
                                Best Collection For Home Decoration
                            </h1>
                            <p className="text-gray-300 text-sm md:text-lg">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                                onClick={handleScrollToProducts}
                            >
                                Shop Now
                            </button>
                        </header>
                    </div>
                </section>
                <section
                    ref={productRef}
                    className="px-16 relative sm:flex sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white mb-7"
                >
                    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <InfoCard
                            icon={<FaShippingFast className="w-8 h-8" />}
                            title="Free Shipping"
                            description="Order over $200"
                        />
                        <InfoCard
                            icon={<FaUndo className="w-8 h-8" />}
                            title="Money Returns"
                            description="30 days money returns"
                        />
                        <InfoCard
                            icon={<FaHeadset className="w-8 h-8" />}
                            title="24/7 Support"
                            description="Customer support"
                        />
                    </div>
                </section>
                <section className="px-16 relative sm:flex sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                    <div className="flex justify-center space-x-4">
                        <button
                            data-aos="fade-right"
                            data-aos-delay="500"
                            onClick={() => handleCategoryChange("all")}
                            className={`border-2 px-4 py-2 rounded font-bold ${category === "all" || category == ""
                                ? "bg-red-400 text-white border-green-500"
                                : "border-red-500 text-red-500"
                                }`}
                        >
                            All
                        </button>
                        <button
                            data-aos="fade-right"
                            data-aos-delay="400"
                            onClick={() => handleCategoryChange("food")}
                            className={`border-2 px-4 py-2 rounded font-bold ${category === "food"
                                ? "bg-red-400 text-white border-green-500"
                                : "border-red-500  text-red-500"
                                }`}
                        >
                            Food
                        </button>
                        <button
                            data-aos="fade-right"
                            data-aos-delay="200"
                            onClick={() => handleCategoryChange("furniture")}
                            className={`border-2 px-4 py-2 rounded font-bold ${category === "furniture"
                                ? "bg-red-400 text-white border-green-500"
                                : "border-red-500  text-red-500"
                                }`}
                        >
                            Furniture
                        </button>
                    </div>
                </section>
                <div
                    ref={productRef}
                    className="relative sm:flex sm:justify-center sm:items-start min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
                >
                    <div className="max-w-7xl mx-auto p-6 lg:p-8">
                        <div className="">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
                                <ProductCard products={products} />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="relative sm:flex sm:justify-center sm:items-start bg-dots-darker bg-center bg-gray-200 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white py-10">
                    <Carousel />
                </section>
                <Footer />
            </WelcomLayout>
        </>
    );
}
