import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, totalQuantity } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("handleSubmit ejecutado");

        const order = {
            buyer: { name, email, address },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        };

        try {
            const docRef = await addDoc(collection(db, "orders"), order);
            console.log("Order placed with ID: ", docRef.id);
            navigate('/thank-you', { state: { name, orderId: docRef.id } });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Checkout
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    label="Nombre"
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <TextField
                    label="Correo electrónico"
                    variant="outlined"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    label="Dirección"
                    variant="outlined"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary" size="large">
                    Finalizar Compra
                </Button>
            </Box>
            <Paper sx={{ mt: 4, p: 2 }}>
                <Typography variant="h5" component="h2">
                    Resumen de la Compra
                </Typography>
                <Typography variant="body1">Total de artículos: {totalQuantity}</Typography>
                <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
                    {cart.map(item => (
                        <Box key={item.id} component="li" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, borderBottom: '1px solid #ddd' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={item.img} alt={item.name} style={{ width: 50, height: 50, marginRight: 16, borderRadius: 5, objectFit: 'cover' }} />
                                <Typography>{item.name} x {item.quantity}</Typography>
                            </Box>
                            <Typography>${item.price * item.quantity}</Typography>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </Container>
    );
};

export default Checkout;
