import React, { useState } from 'react';
import { Link, Head } from "@inertiajs/react";
import ProductCard from "@/Components/ProductCard";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import InfoCard from "@/Components/InfoCard ";
import Footer from "@/Components/Footer";
import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";
import CardContext from "@/Layouts/context/cardContext";

const products = [
    {
        name: "Guyer Chair",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "43",
        totalStars: 3,
        image: "link_to_guyer_chair_image",
        isAdd: false
    },
    {
        name: "Bed King Size",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "4",
        totalStars: 5,
        image: "link_to_bed_king_size_image",
        isAdd: false
    },
    {
        name: "Couple Sofa",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "2",
        totalStars: 5,
        image: "link_to_couple_sofa_image",
        isAdd: false
    },
    {
        name: "Couple Sofa",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "3",
        totalStars: 5,
        image: "link_to_couple_sofa_image",
        isAdd: false
    },

    {
        name: "Couple Sofa",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "5",
        totalStars: 5,
        image: "link_to_couple_sofa_image",
        isAdd: false
    },
    {
        name: "Couple Sofa",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "2",
        totalStars: 5,
        image: "link_to_couple_sofa_image",
        isAdd: false
    },
    {
        name: "Couple Sofa",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "5",
        totalStars: 5,
        image: "link_to_couple_sofa_image",
        isAdd: false
    },
    {
        name: "Couple Sofa",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "2",
        totalStars: 5,
        image: "link_to_couple_sofa_image",
        isAdd: false
    },
    {
        name: "Couple Sofa",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "3",
        totalStars: 5,
        image: "link_to_couple_sofa_image",
        isAdd: false
    },
    {
        name: "Mattress X",
        price: "$45.00",
        oldPrice: "$50.00",
        rating: "4",
        totalStars: 5,
        image: "link_to_mattress_x_image",
        isAdd: false
    },
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
      setCartCount(cartCount + 1);
    };

    return (
        <>
            <Head title="Delights Unveiled" />
            <CardContext.Provider value={products}>
                <WelcomLayout count={cartCount} >
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
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
                                    Shop Now
                                </button>
                            </header>
                        </div>
                    </section>
                    <section className="px-16 relative sm:flex sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
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
                    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                        <div className="max-w-7xl mx-auto p-6 lg:p-8">
                            <div className="">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                                    {products.map((product, index) => (
                                        <Link href={route("product.show", index)}>
                                             <ProductCard key={index} onAddToCart={handleAddToCart} product={product} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </WelcomLayout>
            </CardContext.Provider>
        </>
    );
}
