import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const ThankYouPage = () => {
    const location = useLocation();
    const { name, orderId } = location.state || { name: "Cliente", orderId: "N/A" };

    return (
        <Container maxWidth="sm" sx={{ mt: 5, textAlign: 'center', bgcolor: '#f5f5f5', p: 4, borderRadius: 2, boxShadow: 3 }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    ¡Gracias, {name}!
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    El ID de tu Orden es: {orderId}
                </Typography>
            </Box>
            <Box sx={{ mb: 3 }}>
                <Typography variant="body1" gutterBottom>
                    Tu pedido ha sido procesado con éxito. Pronto recibirás un correo electrónico con los detalles de tu compra.
                </Typography>
            </Box>
            <Button variant="contained" color="primary" component={Link} to="/" sx={{ mt: 3 }}>
                Volver a la tienda
            </Button>
        </Container>
    );
};

export default ThankYouPage;
