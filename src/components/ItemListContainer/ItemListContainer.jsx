import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams ()

    useEffect(() => {
        if(!categoryId) {
            getProducts()
                .then(result => {
                    setProducts(result)
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            getProductsByCategory(categoryId)
                .then(result => {
                    setProducts(result)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        
    }, [categoryId])

    console.log(products)

    return (
        <div>
            <h1>{ greeting }</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer