import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orderCart, setOrderCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const devProducts = [
    { id: 1, name: "Guyer Chair", price: 45.00, oldPrice: 50.00, rating: "43", totalStars: 3, image: "link_to_guyer_chair_image", category: "food" },
    { id: 2, name: "Bed King Size", price: 45.00, oldPrice: 50.00, rating: "4", totalStars: 5, image: "link_to_bed_king_size_image", category: "food" },
    { id: 3, name: "Couple Sofa", price: 45.00, oldPrice: 50.00, rating: "2", totalStars: 5, image: "link_to_couple_sofa_image", category: "furniture" },
    { id: 4, name: "Couple Sofa", price: 45.00, oldPrice: 50.00, rating: "3", totalStars: 5, image: "link_to_couple_sofa_image", category: "food" },
    { id: 5, name: "Couple Sofa", price: 45.00, oldPrice: 50.00, rating: "5", totalStars: 5, image: "link_to_couple_sofa_image", category: "furniture" },
    { id: 6, name: "Couple Sofa", price: 45.00, oldPrice: 50.00, rating: "2", totalStars: 5, image: "link_to_couple_sofa_image", category: "food" },
    { id: 7, name: "Couple Sofa", price: 45.00, oldPrice: 50.00, rating: "5", totalStars: 5, image: "link_to_couple_sofa_image", category: "furniture" },
    { id: 8, name: "Couple Sofa", price: 45.00, oldPrice: 50.00, rating: "2", totalStars: 5, image: "link_to_couple_sofa_image", category: "food" },
    { id: 9, name: "Couple Sofa", price: 45.00, oldPrice: 50.00, rating: "3", totalStars: 5, image: "link_to_couple_sofa_image", category: "furniture" },
    { id: 10, name: "Mattress X", price: 45.00, oldPrice: 50.00, rating: "4", totalStars: 5, image: "link_to_mattress_x_image", category: "food" }
  ];

  useEffect(() => {
    setProducts(devProducts);
  }, []);

  useEffect(() => {
    setCartCount(orderCart.length);
  }, [orderCart]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setProducts(devProducts);
    } else {
      setProducts(devProducts.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    const existingProduct = orderCart.find(item => item.id === product.id);
    if (existingProduct) {
      setOrderCart(orderCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setOrderCart([...orderCart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (productId) => {
    setOrderCart(orderCart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ products, setProducts, orderCart, setOrderCart, cartCount, handleAddToCart, handleRemoveItem, selectedCategory, setSelectedCategory }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };