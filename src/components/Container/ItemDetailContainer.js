import React from 'react';
import ItemDetail from '../../pages/itemDetailPage/itemDetail';
import items from '../CardItem/CardData.js';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{

    const {id} = useParams()
    const item = items.find(prod => prod.id === Number(id));

    return (
        <ItemDetail prod={item}/>
    )
}

export default ItemDetailContainer;