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
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.quantity;
        });
        return acumulador;
    };

    const totalQuantity = getTotalQuantity();

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
