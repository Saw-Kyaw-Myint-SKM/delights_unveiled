import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [orderCart, setOrderCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const devProducts = [];

    useEffect(() => {
        setProducts(devProducts);
    }, []);

    useEffect(() => {
        setCartCount(orderCart.length);
    }, [orderCart]);

    useEffect(() => {
        if (selectedCategory === "All") {
            setProducts(devProducts);
        } else {
            setProducts(
                devProducts.filter(
                    (product) => product.category === selectedCategory
                )
            );
        }
    }, [selectedCategory]);

    const handleAddToCart = (product) => {
        const existingProduct = orderCart.find(
            (item) => item.id === product.id
        );
        if (existingProduct) {
            setOrderCart(
                orderCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setOrderCart([...orderCart, { ...product, quantity: 1 }]);
        }
    };

    const handleRemoveItem = (productId) => {
        setOrderCart(orderCart.filter((item) => item.id !== productId));
    };

    return (
        <CartContext.Provider
            value={{
                products,
                setProducts,
                orderCart,
                setOrderCart,
                cartCount,
                handleAddToCart,
                handleRemoveItem,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
