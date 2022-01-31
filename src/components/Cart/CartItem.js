import React from 'react';
import './Cart.css';

function CartItem(props){
    return (
        <div className="cart-item"> 
            <img className="image-item" src={props.src} alt="product" />
            <div className="info-item">
            <h4 className="name-item">{props.title}</h4>
            <h5 className="price-item">{props.price}</h5>
            <span className="remove-item" id="${item.id}-remove">
                <i className="far fa-trash-alt"></i>
            </span>
            <div>{props.quantity}</div>

            </div>
        </div>
    );
}

export default CartItem;