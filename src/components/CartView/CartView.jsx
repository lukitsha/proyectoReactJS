import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./CartView.module.css";

const CartView = () => {
    const { cart, removeItem } = useContext(CartContext);

    return (
        <div className={styles.cartContainer}>
            <h1>Carrito de Compras</h1>
            <section className={styles.cartItems}>
                {cart.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    cart.map((prod) => (
                        <article key={prod.id} className={styles.cartItem}>
                            <h2>{prod.name}</h2>
                            <p>Cantidad: {prod.quantity}</p>
                            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                        </article>
                    ))
                )}
            </section>
            {cart.length > 0 && <Link to="/checkout" className={styles.checkoutButton}>Checkout</Link>}
        </div>
    );
};

export default CartView;
