import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orderCart, setOrderCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const devProducts = [
    { id: 1, name: "Guyer Chair", price: "$45.00", oldPrice: "$50.00", rating: "43", totalStars: 3, image: "link_to_guyer_chair_image", isAdd: false },
    { id: 2, name: "Bed King Size", price: "$45.00", oldPrice: "$50.00", rating: "4", totalStars: 5, image: "link_to_bed_king_size_image", isAdd: false },
    { id: 3, name: "Couple Sofa", price: "$45.00", oldPrice: "$50.00", rating: "2", totalStars: 5, image: "link_to_couple_sofa_image", isAdd: false },
    { id: 4, name: "Couple Sofa", price: "$45.00", oldPrice: "$50.00", rating: "3", totalStars: 5, image: "link_to_couple_sofa_image", isAdd: false },
    { id: 5, name: "Couple Sofa", price: "$45.00", oldPrice: "$50.00", rating: "5", totalStars: 5, image: "link_to_couple_sofa_image", isAdd: false },
    { id: 6, name: "Couple Sofa", price: "$45.00", oldPrice: "$50.00", rating: "2", totalStars: 5, image: "link_to_couple_sofa_image", isAdd: false },
    { id: 7, name: "Couple Sofa", price: "$45.00", oldPrice: "$50.00", rating: "5", totalStars: 5, image: "link_to_couple_sofa_image", isAdd: false },
    { id: 8, name: "Couple Sofa", price: "$45.00", oldPrice: "$50.00", rating: "2", totalStars: 5, image: "link_to_couple_sofa_image", isAdd: false },
    { id: 9, name: "Couple Sofa", price: "$45.00", oldPrice: "$50.00", rating: "3", totalStars: 5, image: "link_to_couple_sofa_image", isAdd: false },
    { id: 10, name: "Mattress X", price: "$45.00", oldPrice: "$50.00", rating: "4", totalStars: 5, image: "link_to_mattress_x_image", isAdd: false }
  ];

  useEffect(() => {
    setProducts(devProducts);
  }, []);

  useEffect(() => {
    setCartCount(orderCart.length);
  }, [orderCart]);

  const handleAddToCart = (product) => {
    setOrderCart([...orderCart, product]);
  };

  return (
    <CartContext.Provider value={{ products, setProducts, orderCart, setOrderCart, cartCount, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };