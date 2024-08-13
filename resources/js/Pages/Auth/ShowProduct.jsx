import { Link, Head } from "@inertiajs/react";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import Rating from "@/Components/Rating";
import { CartContext } from "@/Layouts/context/CardContext";
import { useContext } from "react";
import Footer from "@/Components/Footer";

export default function Welcome({ auth, product }) {
    const { handleAddToCart } = useContext(CartContext);
    console.log(product)
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <>
            <Head title="Delights Unveiled" />
            <WelcomLayout>
                <section>
                    <Navbar />
                </section>
                <div className="container max-w-7xl mx-auto px-4 py-10">
                    <section >
                        <div className="flex flex-col lg:flex-row px-16">
                            {/* Product Image and Thumbnails */}
                            <div className="w-full mb-10 lg:w-2/5">
                                <img className='w-full' src="/img/original.png" />
                            </div>

                            {/* Product Details */}
                            <div className="w-full lg:w-3/5 lg:pl-10">
                                <h1 className="text-2xl font-bold text-red-500 mb-4">{product.title}</h1>
                                <div className="flex items-center mb-4">
                                    <span className="text-xl text-gray-800 font-semibold">{product.price} Ks</span>
                                    <span className="ml-2 text-sm text-gray-500"><Rating rating={3} totalStars={5} off={false} /></span>
                                </div>
                                <div className="mt-5">
                                    <div>
                                        <span className="text-base text-gray-500 mr-3">Category:</span>
                                        <span className="text-xs  text-red-600 font-medium mr-5 uppercase">{product.categories}</span>
                                    </div>
                                    <div>
                                        <span className="text-base text-gray-500">Total Order: </span>
                                        <span className="text-base text-red-500 font-bold mr-5">{product.total_order}</span>
                                    </div>

                                </div>

                                <div className="my-5">
                                    <span className="text-base text-gray-500 mr-5">Uploaded by:</span>
                                    <span className="text-base font-semibold text-gray-700"> {product.user.name}</span>
                                </div>

                                <p className="text-gray-600 mb-4">{product.description}</p>

                                <div className="">
                                    <button className="w-full mb-5 sm:w-1/3 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-2 rounded mt-5 mr-10"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to cart
                                    </button>
                                    <Link href="/" className="w-full sm:w-1/3 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded mt-5">
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </WelcomLayout>
        </>
    );
}
