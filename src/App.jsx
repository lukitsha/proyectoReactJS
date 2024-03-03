
import Navbar from "./components/Navbar/Navbar"
import ListadoCategorias from "./components/ListadoCategorias/ListadoCategorias"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
    

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting='Bienvenidos al Almacen Vitrual' />
      <h1>Lekets Electronics</h1>
      <h3>Electronic Wharehouse</h3>
      <br />
      <ListadoCategorias/>
      
      
    </>
  )
}

export default App
