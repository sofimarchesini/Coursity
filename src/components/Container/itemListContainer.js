
import React, { useEffect, useState } from 'react';
import '../CardItem/CardItem.css';
import CardItem from '../CardItem/CardItem.js';
import items from '../CardItem/CardData.js';
import ItemFilter from '../ItemFilter/itemFilter.js';
import { useParams } from "react-router";
//import {getFirestore} from "../firebase";


const ItemListContainer = ()=>{

  //const db = getFirestore();
  //const productsCollection = db.collection('items');

  const [items2,setItems] = useState([]);
  const {category} = useParams();

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => (resolve(items)), 2000);})
    }

    useEffect(() => {
      getProducts().then((a)=>setItems(a))
    },[]);

  
  const getProductsWithAsyncAwait = async () => {
     try {
        const result = await getProducts();
     } catch (error) {
          console.error("Ha habido un error:", error);
      }
    };

  getProductsWithAsyncAwait();

  if (category){
     items = items.filter(item=>item.category === category)
  }

  console.log(items);
  return(
      <div id="woman-initial-section" className="woman-section">
        <h3 className="section-text">Get ready to learn</h3>
        <ItemFilter/>
        <div className="grid-container-woman">
          {(items).map((prod) => {
              return (
                <CardItem
                  item={prod}
                  src={prod.image}
                  title={prod.name} 
                  price={prod.price}
                  id={prod.id}
                  />
              )
            }
          )}
        </div>
      </div>    
    );
}

export default ItemListContainer;