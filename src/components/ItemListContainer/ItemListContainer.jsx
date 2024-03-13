import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(result => {
            setProducts(result)
        })
    }, [])

    console.log(products)

    return (
        <div>
            <h1>{ greeting }</h1>
        </div>
    )
}

export default ItemListContainer