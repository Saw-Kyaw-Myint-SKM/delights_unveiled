import { Link, Head } from "@inertiajs/react";
import ProductCard from "@/Components/ProductCard";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import InfoCard from "@/Components/InfoCard ";
import Footer from "@/Components/Footer";
import { FaShippingFast, FaUndo, FaHeadset } from "react-icons/fa";

export default function Blog({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Delights Unveiled" />
            <WelcomLayout>
                <section>
                    <Navbar />
                </section>
                <h1 className="text-5xl">Blog Page</h1>
            </WelcomLayout>
        </>
    );
}
