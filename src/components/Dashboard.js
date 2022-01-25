
import React, { useEffect, useState } from 'react';
import './CardItem/CardItem.css';
import CardItem from './CardItem/CardItem.js';
import items from './CardItem/CardData.js';

function Dashboard(){

  const [items2,setItems] = useState([]);

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
        console.log(result);
     } catch (error) {
          console.error("Ha habido un error:", error);
      }
    };
  
  getProductsWithAsyncAwait();

  

  return(
      <div id="woman-initial-section" className="woman-section">
        <h3 className="section-text">Get ready to learn</h3>
        <div className="grid-container-woman">
          {(items2).map(
            ({name,price,id,image}) => {
              return (
                <CardItem
              src={image}
              title={name}
              price={price} id={id}/>
              )
            }
          )}
        </div>
      </div>    
  );
}

export default Dashboard;