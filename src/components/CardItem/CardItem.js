import { useContext } from 'react';
import { context } from '../context/cartContext'
import {useNavigate} from "react-router-dom";

import React from 'react';
import './CardItem.css';
import '../Cart/Cart.js';



const CardItem = (props) =>{
    //const { addToCart} = useContext(context)
    const navigate = useNavigate();

    return (
        <div className="card-item"> 
            <div id={props.id}>
                <div className='row'>
                    <img className="woman-img" src={process.env.PUBLIC_URL+props.src} alt=""/>
                </div>
                <div className='row'>
                    <p><strong className="name">{props.title}</strong><br />
                    <strong><span className="price">{props.price}</span></strong></p>
                </div>
                <div className='row'>
                    <button  onClick={() => navigate(`/${props.id}`)} className= "mt-4 button-add" id={props.id}><p className="carrito-title">Buy now</p></button><br/>
                 </div>
            </div>
        </div>
    );
}

export default CardItem;