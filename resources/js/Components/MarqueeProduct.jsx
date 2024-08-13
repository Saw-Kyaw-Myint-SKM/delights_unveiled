import React from "react";

const MarqueeProduct = () => {

    return (

        <div className="container max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row px-40">
                <div className="w-full lg:w-3/5 lg:pl-10">
                    <h1 className="text-2xl font-bold text-red-500 mb-4">Bed King Size</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-xl text-gray-800 font-semibold">9000 Ks</span>
                    </div>
                    <div className="mt-5">
                        <div>
                            <span className="text-base text-gray-500">Total Order: 100</span>
                        </div>
                    </div>
                    <div className="mt-5 w-auto pr-40">
                        <p className="text-gray-600 mb-4 break-all whitespace-normal" >Quasi est ut qui reprehenderit. Amet dolorem nostrum animi necessitatibus. Dolor suscipit fuga consequatur nobis quia incidunt. Ipsum ut vero perferendis reiciendis dolor.</p>
                    </div>
                </div>
                <div className="w-full mb-10 lg:w-2/5">
                    <img className='w-full' src="/img/original.png" />
                </div>
            </div>
        </div>
    );
};

export default MarqueeProduct;