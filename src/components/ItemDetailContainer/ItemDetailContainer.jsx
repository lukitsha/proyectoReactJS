
import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import '../ItemDetailContainer/ItemDetailContainer.module.css'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...data}

                setProduct(productAdapted)
            })
            .catch()
    }, [itemId])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer