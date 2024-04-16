import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./context/CartContext"
import CartView from "./components/CartView/CartView" 

const App = () => {
  //const [page, setPage] = useState('list')
    

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
      

          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos al Almacen Vitrual' /> }></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de Productos Filtrado' /> }></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer /> }></Route>
            <Route path='/cart' element={<CartView/>}></Route>
            <Route path='*' element={ <h1>404 - NOT FOUND</h1> }></Route>
          </Routes>

          
        </BrowserRouter>
      </CartProvider>
      
      
    </>
  )
}

export default App
