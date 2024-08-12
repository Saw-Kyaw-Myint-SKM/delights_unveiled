import React, { useRef, useContext, useEffect } from "react";
import { Link, Head } from "@inertiajs/react";
import ProductCard from "@/Components/ProductCard";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import InfoCard from "@/Components/InfoCard ";
import Footer from "@/Components/Footer";
import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";
import { CartContext } from "@/Layouts/context/CardContext";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    products,
}) {
    const productRef = useRef(null);
    const { selectedCategory, setSelectedCategory, setProducts } =
        useContext(CartContext);

    const handleScrollToProducts = () => {
        if (productRef.current) {
            productRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <Head title="Delights Unveiled" />
            <WelcomLayout>
                <section>
                    <Navbar />
                    <div
                        className="w-full mx-auto bg-cover bg-center  flex flex-col justify-end h-[60vh]"
                        style={{
                            backgroundImage: "url('/img/leading_photo.png')",
                        }}
                    >
                        <header className="pl-16 pr-16 pt-5 pb-5">
                            <h1 className="text-base md:text-4xl font-bold">
                                Best Collection For Home Decoration
                            </h1>
                            <p className="text-gray-600 text-sm md:text-lg">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit...
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
                <section className="px-16 relative sm:flex sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white mb-7">
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
                <section className="px-16 relative sm:flex sm:justify-start sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                    <div className="flex justify-start space-x-4">
                        <button
                            onClick={() => handleCategoryChange("All")}
                            className={`border-2 px-4 py-2 rounded font-bold ${
                                selectedCategory === "All"
                                    ? "bg-red-400 text-white border-green-500"
                                    : "border-red-500 text-red-500"
                            }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleCategoryChange("food")}
                            className={`border-2 px-4 py-2 rounded font-bold ${
                                selectedCategory === "food"
                                    ? "bg-red-400 text-white border-green-500"
                                    : "border-red-500  text-red-500"
                            }`}
                        >
                            Food
                        </button>
                        <button
                            onClick={() => handleCategoryChange("furniture")}
                            className={`border-2 px-4 py-2 rounded font-bold ${
                                selectedCategory === "furniture"
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                                <ProductCard products={products} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </WelcomLayout>
        </>
    );
}
