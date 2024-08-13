import React from "react";

const MarqueeProduct = () => {

    return (
        <marquee width="100%" direction="left" height="100px">
            <div className="flex justify-evenly items-center">
                    <div className="w-1/2">
                        <img className='w-full' src="/img/original.png" />
                    </div>
                <div className="w-1/2">
                <h1 className="text-2xl font-bold text-red-500 mb-4">Bed King Size</h1>
                <p className="text-gray-600 mb-4">Quasi est ut qui reprehenderit. Amet dolorem nostrum animi necessitatibus. Dolor suscipit fuga consequatur nobis quia incidunt. Ipsum ut vero perferendis reiciendis dolor.</p>
                </div>
            </div>
        </marquee>
    );
};

export default MarqueeProduct;