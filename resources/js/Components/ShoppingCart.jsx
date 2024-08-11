import React, { useContext } from 'react';
import { Link } from "@inertiajs/react";
import { CartContext } from '@/Layouts/context/CardContext';

const ShoppingCart = () => {
  const { orderCart, setOrderCart, handleRemoveItem } = useContext(CartContext)

  const handleIncreaseQuantity = (productId) => {
    const updatedCart = orderCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setOrderCart(updatedCart);
    console.log(orderCart)
    calculateTotal()
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = orderCart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setOrderCart(updatedCart);
    calculateTotal()
  };

  const calculateTotal = () => {
    return orderCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-2 w-full">
      <div className={`${orderCart.length === 0 ? 'w-full flex flex-col items-center' : 'bg-white shadow-md w-full md:w-4/6'}  rounded-lg mr-0 md:mr-4 py-10`}>
        {orderCart.length === 0 ? (
          <p className='mb-10 text-lg font-bold text-gray-700'>There is no order yet.</p>
        ) : (
          <div className="mb-5 h-80 overflow-y-auto">
            {orderCart.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center mr-10">
                  <img className='w-24' src="/img/original.png" />
                  <div className="ml-4">
                    <div className="text-sm font-semibold text-gray-700">{item.name}</div>
                    <div className="text-gray-500">{item.category}</div>
                    <button
                      className="text-xs text-red-500 hover:text-red-700 mt-2"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-lg font-semibold px-3 py-1 border"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="text-lg font-semibold px-3 py-1 border"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-semibold rounded py-1 px-2 bg-blue-200"> {item.price} Ks </span>
                  <span className="ml-4 text-xs text-white font-semibold rounded py-1 px-2 bg-red-500">{(item.price * item.quantity).toFixed(2)} Ks</span>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link href="/" className="ps-4 text-blue-500 hover:underline">
          Continue Shopping
        </Link>
      </div>
      <div className={`${orderCart.length === 0 ? 'hidden' : ''} w-full md:w-2/6 bg-white shadow-md rounded-lg p-6 mt-4 md:mt-0`}>
        <h3 className="text-base font-bold mb-4 text-gray-600">Order Summary</h3>
        <div className="mb-4">
          <span className="font-semibold text-sm text-gray-500">Items: {orderCart.length}</span>
          <span className="ml-4 font-semibold text-base text-gray-500">{calculateTotal()} Ks</span>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-sm text-gray-500">Shipping</label>
          <select className="w-full border text-sm text-gray-600 px-4 py-2">
            <option>Standard Delivery</option>
            <option>Express Delivery </option>
            <option>Next Day Delivery </option>
            <option>Click & Collect</option>
            <option>Cash on Delivery</option>
          </select>
        </div>
        <div className="mb-10">
          <label className="block mb-2 font-semibold text-sm text-gray-500">Promo Code</label>
          <input
            type="text"
            className="w-full border px-4 py-2 font-semibold text-sm text-gray-500"
            placeholder="Enter your code"
          />
        </div>
        <div className="mb-4">
          <span className="font-semibold text-sm text-gray-500">Total Cost:</span>
          <span className="ml-4 font-semibold text-base text-gray-700">{calculateTotal()} Ks</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;