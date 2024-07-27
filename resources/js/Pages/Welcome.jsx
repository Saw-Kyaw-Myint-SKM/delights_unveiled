import { Link, Head } from '@inertiajs/react';
import ProductCard from '@/Components/ProductCard';
import WelcomLayout from '@/Layouts/WelcomeLayout'

const products = [
    {
        name: 'Guyer Chair',
        price: '$45.00',
        oldPrice: '$50.00',
        image: 'link_to_guyer_chair_image',
        description: 'A comfortable chair for your living room.'
    },
    {
        name: 'Bed King Size',
        price: '$45.00',
        oldPrice: '$50.00',
        image: 'link_to_bed_king_size_image',
        description: 'A spacious bed for a king.'
    },
    {
        name: 'Couple Sofa',
        price: '$45.00',
        oldPrice: '$50.00',
        image: 'link_to_couple_sofa_image',
        description: 'A cozy sofa for two.'
    },
    {
        name: 'Mattress X',
        price: '$45.00',
        oldPrice: '$50.00',
        image: 'link_to_mattress_x_image',
        description: 'A comfortable mattress for a good night\'s sleep.'
    }
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Welcome" />
            <WelcomLayout>
                <section >
                    <div
                        className="container mx-auto bg-cover bg-center h-[60vh]"
                        style={{ backgroundImage: "url('/leading_photo.png')" }}
                    >
                        <header className="bg-white p-4">
                            <h1 className="text-4xl font-bold">Best Collection For Home Decoration</h1>
                            <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Shop Now</button>
                        </header>
                    </div>

                </section>
                <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                    <div className="max-w-7xl mx-auto p-6 lg:p-8">
                        <div className="mt-16">
                            {/*<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">*/}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">

                                {products.map((product, index) => (
                                    <Link
                                        //href={route('product.description')}
                                        className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                                    >
                                        <ProductCard key={index} product={product} />

                                    </Link>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </WelcomLayout >
        </>
    );
}
