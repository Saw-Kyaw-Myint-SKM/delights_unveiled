import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

function ShoppingCartIcon({ count }) {
  return (
    <div className="relative inline-block">
      <MdOutlineShoppingCart size={20} />
      {count > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs rounded-full  px-1 py-0">
          {count}
        </span>
      )}
    </div>
  );
}

export default ShoppingCartIcon;