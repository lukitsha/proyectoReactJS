import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import Checkout from './components/Checkout/Checkout';
import ThankYouPage from './components/ThankYouPage/ThankYouPage';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartView />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/thank-you" element={<ThankYouPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
