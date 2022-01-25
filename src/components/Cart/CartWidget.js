
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../NavBar/NavBar.css';


function showCart(){
    const cartDOM = document.querySelector(".cart");
    const cartoverlay = document.querySelector(".cart-overlay") ;
    cartoverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}

class CartWidget  extends Component{
    render(){
        return <div onClick={() => showCart()} className="cart-button"><i className="icon-header fas fa-shopping-bag"><FontAwesomeIcon icon={faShoppingCart} /></i></div>
    }
}

export default CartWidget;
