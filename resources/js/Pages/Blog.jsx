import React from "react";
import { Head } from "@inertiajs/react";
import WelcomLayout from "@/Layouts/WelcomeLayout";
import Navbar from "@/Components/Nevbar";
import Footer from "@/Components/Footer";
import "aos/dist/aos.css";

const Blog = ({ auth, laravelVersion, phpVersion }) => {
    return (
        <>
            <Head title="Delights Unveiled" />
            <WelcomLayout user={auth.user}>
                <div className="w-full">
                    <Navbar />
                    <section className="mb-12 mx-auto px-16 py-8">
                        <div className="max-w-7xl flex flex-col md:flex-row items-center mx-auto">
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                className="md:w-1/3"
                            >
                                <h1 className="text-4xl font-bold mb-4">
                                    The Beauty of Nature
                                </h1>
                                <p className="text-lg mb-6">
                                    Discover the breathtaking landscapes and
                                    serene environments that nature has to
                                    offer. Join us on a journey to explore the
                                    wonders of the natural world.
                                </p>
                                <a
                                    href="https://en.wikipedia.org/wiki/Bago,_Myanmar"
                                    target="__blank"
                                    className="bg-red-500 text-white py-2 px-4 rounded-md"
                                >
                                    Eplore...
                                </a>
                            </div>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                className="md:w-2/3 mt-8 md:mt-0 md:pl-8"
                            >
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
                            <div
                                data-aos="fade-down-right"
                                data-aos-duration="1000"
                                className="md:w-1/2 md:order-2"
                            >
                                <h2 className="text-3xl font-semibold mb-4">
                                    Majestic Mountains
                                </h2>
                                <p className="text-lg mb-6">
                                    Standing tall and proud, mountains are a
                                    symbol of strength and endurance. They
                                    provide a challenging terrain for
                                    adventurers and a serene escape for those
                                    seeking peace.
                                </p>
                            </div>
                            <div
                                data-aos="fade-down-left"
                                data-aos-duration="1000"
                                className="md:w-1/2 md:order-1 mt-8 md:mt-0 md:pr-8"
                            >
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
                            <div
                                data-aos="fade-up-right"
                                data-aos-duration="1000"
                                className="md:w-1/2"
                            >
                                <h2 className="text-3xl font-semibold mb-4">
                                    A Journey Through the Forest
                                </h2>
                                <p className="text-lg mb-6">
                                    Forests are teeming with life and mystery.
                                    Watch this video to experience the lush
                                    greenery and the sounds of the forest.
                                </p>
                            </div>
                            <div
                                data-aos="fade-up-left"
                                data-aos-duration="1000"
                                className="md:w-1/2 mt-8 md:mt-0 md:pl-8"
                            >
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
                            <div
                                data-aos="zoom-in-down"
                                data-aos-duration="1000"
                                className="md:w-1/2 md:order-2"
                            >
                                <h2 className="text-3xl font-semibold mb-4">
                                    Majestic Mountains
                                </h2>
                                <p className="text-lg mb-6">
                                    Standing tall and proud, mountains are a
                                    symbol of strength and endurance. They
                                    provide a challenging terrain for
                                    adventurers and a serene escape for those
                                    seeking peace.
                                </p>
                            </div>
                            <div
                                data-aos="zoom-in-down"
                                data-aos-duration="1000"
                                className="md:w-1/2 md:order-1 mt-8 md:mt-0 md:pr-8"
                            >
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

                    <section className="mb-12 mx-auto px-4 sm:px-8 lg:px-16 py-8">
                        <div className="max-w-7xl lg:relative lg:h-96 flex flex-col items-center mx-auto">
                            <div
                                data-aos="zoom-out-up"
                                data-aos-duration="1000"
                                className="lg:md:w-1/2 lg:absolute lg:z-20 lg:top-0 lg:left-1/4 lg:transform lg:-translate-x-1/2 lg:mx-auto text-center lg:text-left"
                            >
                                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                                    A Journey Through the Forest
                                </h2>
                                <p className="text-base sm:text-lg mb-6">
                                    Forests are teeming with life and mystery.
                                    Watch this video to experience the lush
                                    greenery and the sounds of the forest.
                                </p>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="700"
                                className="lg:absolute lg:z-0 lg:transform lg:-translate-x-1/2  lg:left-36 lg:top-44 lg:w-1/2 mt-8 mb-5 md:mt-0 md:pl-8"
                            >
                                <div className="aspect-video">
                                    <iframe
                                        src="/video/frame_5.mp4"
                                        title="Forest Video"
                                        className="w-auto h-full rounded-lg shadow-lg"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="500"
                                className="lg:absolute lg:z-10 lg:right-0 lg:top-32 lg:transform lg:translate-x-1/2 lg:w-1/2 mt-8 md:mt-0 md:pl-8"
                            >
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
                    <section className="mb-12 py-32 mx-auto pb-8">
                        <div className="relative max-w-7xl mx-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30469.00398235487!2d96.45706956019323!3d17.33360931591213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c3d6b94708e943%3A0x65ab7af98d3e6f32!2sBago!5e0!3m2!1sen!2smm!4v1723829332244!5m2!1sen!2smm"
                                className="w-full"
                                height="450"
                                allowFullScreen
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>

                            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <h2 className="text-4xl font-semibold mb-4">
                                        Bago
                                    </h2>
                                    <p className="text-lg">
                                        The ocean, with its vastness and depth,
                                        holds countless secrets and wonders
                                        waiting to be explored.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </WelcomLayout>
        </>
    );
};

export default Blog;
