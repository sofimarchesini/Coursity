
import React, { useEffect, useState } from 'react';
import '../CardItem/CardItem.css';
import CardItem from '../CardItem/CardItem.js';
<<<<<<< HEAD
import items from '../CardItem/CardData.js';
=======
import ItemFilter from '../ItemFilter/itemFilter.js';
>>>>>>> 2bd25f1a4335c265e2946e97a79e8cf131e48e3e
import { useParams } from "react-router";
import {getFirestore} from "../../firebase";


const ItemListContainer = ()=>{

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();
  const { category } = useParams();
  
  useEffect(() => {
      const db = getFirestore();
      let prods;
      if (category) {
        prods = db
          .collection("items")
          .where("category", "==", category);
      } else {
        prods = db.collection("items");

      }


<<<<<<< HEAD
=======
      const getDataFromFirestore = async () => {
        setLoading(true);
        try {
          const response = await prods.get();
          if (response.empty) console.log("No hay productos");
          setItems(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }  finally {
          setLoading(false);
        }
      };
      getDataFromFirestore();

    }, [category]);
>>>>>>> 2bd25f1a4335c265e2946e97a79e8cf131e48e3e

  return(
      <div id="woman-initial-section" className="woman-section">
        <h3 className="section-text">Get ready to learn</h3>
        <div className="grid-container-woman">
          {(items).map((prod) => {
              return (
                <CardItem
                  item={prod}
                  src={prod.image}
                  title={prod.name} 
                  price={prod.price}
                  id={prod.id}
                  nameToNavigate={prod.nameToNavigate}
                  />
              )
            }
          )}
        </div>
      </div>    
    );
}

export default ItemListContainer;