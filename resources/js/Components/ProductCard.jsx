import React, { useContext } from 'react';
import Rating from './Rating';
import { Link } from '@inertiajs/react';
import { CartContext } from '@/Layouts/context/CardContext';

const ProductCard = ({ product, onAddToCart  }) => {
  const { products, handleAddToCart  } = useContext(CartContext)

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link href={route("product.show", product.id)}>
          {/*<img className="w-full" src={product.image} alt={product.name} />*/}
            <img className='w-full' src="/img/original.png" />
            <div className="p-4">
              <div className="text-black dark:text-gray-100 font-bold text-xl mb-1">{product.name}</div>
            </div>
            <div className="px-4">
              <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-red-500 mr-2 mb-2">{product.price} Ks</span>
              <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 line-through">{product.oldPrice} Ks</span>
            </div>
            <div className="px-4 pb-2">
              <Rating rating={product.rating} totalStars={product.totalStars} />
            </div>
          </Link>
          <div className="">
          <button className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-2 rounded"
             onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;