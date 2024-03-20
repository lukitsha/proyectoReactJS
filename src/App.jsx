
import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import ListadoCategorias from "./components/ListadoCategorias/ListadoCategorias"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailConteiner"

const App = () => {
  const [page, setPage] = useState('list')
    

  return (
    <div className="App">

      <Navbar/>
      
      <h1>Lekets Electronics</h1>
      <h3>Electronic Wharehouse</h3>
      
      { page === 'list' && <ItemListContainer greeting='Bienvenidos al Almacen Vitrual' /> }
      { page === 'detail' && <ItemDetailContainer /> }
      
      <ListadoCategorias />
      
      
      
      
    </div>
  )
}

export default App
