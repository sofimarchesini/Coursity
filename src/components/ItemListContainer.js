import React from 'react';
import './CardItem/CardItem.css';

function ItemListContainer(props){
    return(
        <div>
            <h1 className="home-text">{props.title}</h1>
        </div>
    ); 
}

export default ItemListContainer;