
import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import ListadoCategorias from "./components/ListadoCategorias/ListadoCategorias"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  //const [page, setPage] = useState('list')
    

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
      
        <h1>Lekets Electronics</h1>
        <h3>Electronic Wharehouse</h3>

        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos al Almacen Vitrual' /> }></Route>
          <Route path='/category/:categoryId' element={<ItemDetailContainer greeting='Listado de Productos Filtrado' /> }></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer /> }></Route>
          
        </Routes>

        <ListadoCategorias />
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App
