import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import styles from "./ItemListContainer.module.css";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState();
    const { categoryId } = useParams();

    useEffect(() => {
        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        );

        console.log("productsCollection:", productsCollection); // Verifica la consulta a la base de datos

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });

                console.log("productsAdapted:", productsAdapted); // Verifica los datos adaptados

                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error("Error fetching products:", error); // Maneja adecuadamente los errores
            });
    }, [categoryId]);

    console.log("products:", products); // Verifica el estado de products

    return (
        <div className={styles.container}>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;