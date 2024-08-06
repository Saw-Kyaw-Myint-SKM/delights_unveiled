import React, { useContext } from 'react';
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
    <div className="flex justify-between p-8">
      <div className="w-3/4">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        <div className="mb-4">
          <span className="font-semibold"> {orderCart.length} Items</span>
        </div>
        <div className="bg-white shadow-md rounded-lg">
          {orderCart.map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                {/* <img className="w-24" src={item.image} alt={item.name} /> */}
                <img className='w-24' src="/img/original.png" />
                <div className="ml-4">
                  <div className="text-lg font-semibold">{item.name}</div>
                  <div className="text-gray-500">{item.category}</div>
                  <button
                    className="text-red-500 hover:text-red-700 mt-2"
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
                    <span className="text-lg font-semibold rounded py-1 px-2 bg-green-400"> {item.price} Ks </span>
                    <span className="ml-4 text-lg font-semibold rounded py-1 px-2 bg-green-400">{(item.price * item.quantity).toFixed(2)} Ks</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 text-blue-500 hover:underline">Continue Shopping</button>
      </div>
      <div className="w-1/4 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <div className="mb-4">
          <span className="font-semibold">Items: {orderCart.length}</span>
          <span className="ml-4 font-semibold">{calculateTotal()}</span>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Shipping</label>
          <select className="w-full border px-4 py-2">
            <option>Standard Delivery - £5.00</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Promo Code</label>
          <input
            type="text"
            className="w-full border px-4 py-2"
            placeholder="Enter your code"
          />
          <button className="mt-2 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Total Cost: {calculateTotal()}</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;