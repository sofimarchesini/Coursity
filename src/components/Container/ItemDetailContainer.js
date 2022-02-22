/**mport React from 'react';
import ItemDetail from '../../pages/itemDetailPage/itemDetail';
import { useParams } from 'react-router-dom';
import {getFirestore} from "../../firebase";
import { useEffect, useState } from 'react';


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState();
      
    useEffect(() => {
        const db = getFirestore();
        let prods = db.collection("items");
        const prod = prods.doc(id);
        console.log(prods);
        prod.get().then((response) => setItem({ ...response.data(), id: response.id })).catch(console.log("error"))
      }, []);
    
    return (<ItemDetail prod={item}/>)
}

export default ItemDetailContainer;**/


import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import ItemDetail from '../../pages/itemDetailPage/itemDetail';
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    const db = getFirestore();
    let productsCollection = db.collection("items");
    const selectedProduct = productsCollection.doc(id);

    selectedProduct
        .get()
        .then((response) => setItem({ ...response.data(), id: response.id }))
        .catch(console.log("error"))
        .finally(() => setIsLoading(false));
    

    if (isLoading) return <p>Cargando...</p>;

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;