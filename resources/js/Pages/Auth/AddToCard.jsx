import React, { useContext } from 'react';
import { Link, Head } from "@inertiajs/react";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import Footer from "@/Components/Footer";
import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";
import ShoppingCart from '@/Components/ShoppingCart';
export default function AddToCard({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Delights Unveiled" />
                <WelcomLayout>
                    <section>
                        <Navbar />
                    </section>
                    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                        <div className="w-full mx-auto p-6 lg:p-8">
                            <div className="">
                                <ShoppingCart />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </WelcomLayout>
        </>
    );
}
