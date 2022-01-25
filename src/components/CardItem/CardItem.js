import React from 'react';
import './CardItem.css';


function CardItem(props){
    return (
        <div className="card-item"> 
            <div id={props.id}>
                <img className="woman-img" src={process.env.PUBLIC_URL+props.src} alt=""/>
                 <p><strong className="name">{props.title}</strong><br />{props.description}<br/>
                    <strong><span className="price">{props.price}</span></strong></p>
                    <button className= "mt-4 button-add" id={props.id}><p className="carrito-title">Add to Cart</p></button><br/>
            </div>
        </div>
    );
}

export default CardItem;