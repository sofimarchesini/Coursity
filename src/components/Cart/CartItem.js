import React from 'react';

function CartItem(props){
    return (
        <div className="cart item"> 
            <img className="image-item" src={props.image} alt="product" />
            <div className="info-item">
            <h4 className="name-item">{props.name}</h4>
            <h5 className="price-item">{props.price}</h5>
            <span className="remove-item" id="${item.id}-remove">
                <i className="far fa-trash-alt"></i>
            </span>
            </div>
            <div>
                <i className="fas fa-chevron-up cart-up" id="${item.id}-up"></i>
            <p className="item-amount">1</p>
                <i className="fas fa-chevron-down cart-down" id="${item.id}-down"></i>
            </div>
        </div>
    );
}

export default CartItem;