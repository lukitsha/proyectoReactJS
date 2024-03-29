
import { useState, useEffect } from "react";
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import '../ItemDetailContainer/ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams ()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer