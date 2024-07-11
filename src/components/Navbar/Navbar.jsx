import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    const { totalQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const categoriesCollection = collection(db, 'categories');
        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setCategories(categoriesAdapted);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    return (
        <AppBar position="static" sx={{ bgcolor: '#333' }}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="h6" onClick={() => navigate('/')} sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
                            LeketsElectronics
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                            {categories.map(cat => (
                                <Button 
                                    key={cat.id} 
                                    component={Link} 
                                    to={`/category/${cat.slug}`} 
                                    color="inherit"
                                    sx={{ '&:hover': { color: '#b65555' } }}
                                >
                                    {cat.name}
                                </Button>
                            ))}
                            <Button component={Link} to="/category/placasDeVideo" color="inherit" sx={{ '&:hover': { color: '#b65555' } }}>
                                Placas de Video
                            </Button>
                            <Button component={Link} to="/category/vapes" color="inherit" sx={{ '&:hover': { color: '#b65555' } }}>
                                Vapes
                            </Button>
                            <Button component={Link} to="/category/otros" color="inherit" sx={{ '&:hover': { color: '#b65555' } }}>
                                Otros
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <IconButton component={Link} to="/cart" color="inherit">
                            <Badge badgeContent={totalQuantity} color="secondary" sx={{ '& .MuiBadge-badge': { backgroundColor: '#b65555' } }}>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
