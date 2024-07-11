import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart((prev) => [...prev, productToAdd]);
        } else {
            console.error('El producto ya está agregado');
        }
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((prod) => prod.id !== id));
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const getTotalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    const totalQuantity = Number(getTotalQuantity()); // Asegurarse de que es un número

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
