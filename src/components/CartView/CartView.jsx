import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Container, Paper, Typography, Button, Box } from "@mui/material";

const CartView = () => {
    const { cart, removeItem } = useContext(CartContext);

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Carrito de Compras
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="h6" component="p">
                    El carrito está vacío
                </Typography>
            ) : (
                cart.map((prod) => (
                    <Paper key={prod.id} sx={{ mb: 2, p: 2, display: "flex", alignItems: "center" }}>
                        <img src={prod.img} alt={prod.name} style={{ width: 50, height: 50, marginRight: 16, borderRadius: 5, objectFit: "cover" }} />
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6">{prod.name}</Typography>
                            <Typography variant="body1">Cantidad: {prod.quantity}</Typography>
                        </Box>
                        <Button variant="contained" color="error" onClick={() => removeItem(prod.id)}>
                            Eliminar
                        </Button>
                    </Paper>
                ))
            )}
            {cart.length > 0 && (
                <Button component={Link} to="/checkout" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Checkout
                </Button>
            )}
        </Container>
    );
};

export default CartView;
