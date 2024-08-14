import React from "react";
import { Head } from "@inertiajs/react";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import Footer from "@/Components/Footer";

const Blog = ({ auth, laravelVersion, phpVersion }) => {
    return (
        <>
            <Head title="Delights Unveiled" />
            <WelcomLayout>
                <div className="w-full">
                    <Navbar />
                    {/* Hero Section */}
                    <section className="mb-12 mx-auto px-16 py-8">
                        <div className="max-w-7xl flex flex-col md:flex-row items-center mx-auto">
                            <div className="md:w-1/3">
                                <h1 className="text-4xl font-bold mb-4">The Beauty of Nature</h1>
                                <p className="text-lg mb-6">
                                    Discover the breathtaking landscapes and serene environments that
                                    nature has to offer. Join us on a journey to explore the wonders of
                                    the natural world.
                                </p>
                                <button className="bg-red-500 text-white py-2 px-4 rounded-md">
                                    Eplore...
                                </button>
                            </div>
                            <div className="md:w-2/3 mt-8 md:mt-0 md:pl-8">
                                <img
                                    src="/img/blog.jpeg"
                                    alt="Nature"
                                    className="w-full h-80 rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mb-12 bg-gray-200 mx-auto px-16 py-8">
                        <div className="max-w-7xl flex flex-col md:flex-row items-center  mx-auto">
                            <div className="md:w-1/2 md:order-2">
                                <h2 className="text-3xl font-semibold mb-4">Majestic Mountains</h2>
                                <p className="text-lg mb-6">
                                    Standing tall and proud, mountains are a symbol of strength and
                                    endurance. They provide a challenging terrain for adventurers and a
                                    serene escape for those seeking peace.
                                </p>
                            </div>
                            <div className="md:w-1/2 md:order-1 mt-8 md:mt-0 md:pr-8">
                            <div className="aspect-video">
                                    <iframe
                                        src="/video/frame_1.mp4"
                                        title="Forest Video"
                                        className="w-full h-full rounded-lg shadow-lg"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12 mx-auto px-16 py-8">
                        <div className="max-w-7xl flex flex-col md:flex-row items-center  mx-auto">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-semibold mb-4">A Journey Through the Forest</h2>
                                <p className="text-lg mb-6">
                                    Forests are teeming with life and mystery. Watch this video to
                                    experience the lush greenery and the sounds of the forest.
                                </p>
                            </div>
                            <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
                                <div className="aspect-video">
                                    <iframe
                                        src="/video/frame_2.mp4"
                                        title="Forest Video"
                                        className="w-full h-full rounded-lg shadow-lg"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12 bg-gray-200 mx-auto px-16 py-8">
                        <div className="max-w-7xl flex flex-col md:flex-row items-center  mx-auto">
                            <div className="md:w-1/2 md:order-2">
                                <h2 className="text-3xl font-semibold mb-4">Majestic Mountains</h2>
                                <p className="text-lg mb-6">
                                    Standing tall and proud, mountains are a symbol of strength and
                                    endurance. They provide a challenging terrain for adventurers and a
                                    serene escape for those seeking peace.
                                </p>
                            </div>
                            <div className="md:w-1/2 md:order-1 mt-8 md:mt-0 md:pr-8">
                            <div className="aspect-video">
                                    <iframe
                                        src="/video/frame_3.mp4"
                                        title="Forest Video"
                                        className="w-full h-full rounded-lg shadow-lg"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12 mx-auto px-16 py-8">
                        <div className="max-w-7xl relative h-96 flex flex-col md:flex-row items-center  mx-auto">
                            <div className="md:w-1/2 absolute z-20 mx-auto top-0 left-60">
                                <h2 className="text-3xl font-semibold mb-4">A Journey Through the Forest</h2>
                                <p className="text-lg mb-6">
                                    Forests are teeming with life and mystery. Watch this video to
                                    experience the lush greenery and the sounds of the forest.
                                </p>
                            </div>
                            <div className="absolute z-0 left-60 top-44 md:w-1/2 mt-8 md:mt-0 md:pl-8">
                                <div className="aspect-video">
                                    <iframe
                                        src="/video/frame_5.mp4"
                                        title="Forest Video"
                                        className="w-auto h-full rounded-lg shadow-lg"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="absolute z-10 right-12 top-32 md:w-1/2 mt-8 md:mt-0 md:pl-8">
                                <div className="aspect-video">
                                    <iframe
                                        src="/video/frame_4.mp4"
                                        title="Forest Video"
                                        className="w-auto h-full rounded-lg shadow-lg"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Overlay Section */}
                    <section className="mb-12 py-32 mx-auto px-16 pb-8">
                        <div className="relative max-w-7xl mx-auto">
                            <img
                                src="/img/original.png"
                                alt="Ocean"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <h2 className="text-4xl font-semibold mb-4">The Endless Ocean</h2>
                                    <p className="text-lg">
                                        The ocean, with its vastness and depth, holds countless secrets and
                                        wonders waiting to be explored.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion Section */}
                    <section className="mb-12 mx-auto px-16 py-8">
                        <div className="text-center max-w-7xl  mx-auto">
                            <h2 className="text-3xl font-semibold mb-4">Join Our Adventure</h2>
                            <p className="text-lg mb-6">
                                Whether you're a seasoned explorer or just starting out, there's
                                always something new to discover in the great outdoors.
                            </p>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-md">
                                Subscribe Now
                            </button>
                        </div>
                    </section>
                </div>
                <Footer />
            </WelcomLayout>
        </>
    );
};

export default Blog;
