import React, { useContext } from 'react';
import Rating from './Rating';
import { Link } from '@inertiajs/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import PrimaryButton from './PrimaryButton';
import { CartContext } from '@/Layouts/context/CardContext';

const OrderCard = () => {

  const { orderCart } = useContext(CartContext)
  return (
    <>
    {orderCart.map((cart) => (
      <div key={cart.id} className="max-w-sm rounded overflow-hidden shadow-lg">
        {/*<img className="w-full" src={product.image} alt={product.name} />*/}
        <Link href={route("product.show", cart.id)}>
          <img className='w-full' src="/img/original.png" />
          <div className="p-4">
            <div className="text-black dark:text-gray-100 font-bold text-xl mb-1">{cart.name}</div>
          </div>
          <div className="px-4">
            <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-red-500 mr-2 mb-2">{cart.price}</span>
          </div>
          <div className="px-4 pb-2">
            <Rating rating={cart.rating} totalStars={cart.totalStars} />
          </div>
        </Link>
        <div className="flex items-center justify-evenly border border-gray-300 p-2">
          <PrimaryButton className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            <MdKeyboardArrowLeft />
          </PrimaryButton>
          <span className='text-gray-500 dark:text-gray-100 font-bold text-xl mx-4'>
            8
          </span>
          <PrimaryButton className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            <MdKeyboardArrowRight />
          </PrimaryButton>
        </div>
      </div>
      ))}
    </>
  );
};

export default OrderCard;