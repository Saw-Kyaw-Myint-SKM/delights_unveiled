import React, { useContext } from 'react';
import { Link, Head } from "@inertiajs/react";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import InfoCard from "@/Components/InfoCard ";
import Footer from "@/Components/Footer";
import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";
import OrderCard from '@/Components/OrderCard';
export default function AddToCard({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Delights Unveiled" />
                <WelcomLayout>
                    <section>
                        <Navbar />
                    </section>
                    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                        <div className="max-w-7xl mx-auto p-6 lg:p-8">
                            <div className="">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                                    <OrderCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </WelcomLayout>
        </>
    );
}
