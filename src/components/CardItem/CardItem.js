import { useContext } from 'react';
import { context } from '../context/cartContext'
import {useNavigate} from "react-router-dom";

import React from 'react';
import './CardItem.css';
import '../Cart/Cart.js';



const CardItem = (props) =>{
    //const { addToCart} = useContext(context)
<<<<<<< HEAD
    const navigate = useNavigate();
    return (
        <div className="card-item container" onClick={() => navigate(`/${props.nameToNavigate}`)}> 
=======

    const navigate = useNavigate();
    return (
        <div className="card-item container" onClick={() => navigate(`/items/${props.id}`)}> 
>>>>>>> 2bd25f1a4335c265e2946e97a79e8cf131e48e3e
            <div id={props.id} className='card-item-sun'>
                <div className='row-1'>
                    <img className="woman-img" src={process.env.PUBLIC_URL+props.src} alt=""/>
                </div>
                <div className='row-2'>
                    <p className="name">{props.title}<br /></p>
                    <p className="name-2">Coursity<br /></p>
                </div>
                <div className='row-3'>
                <p className="price">${props.price}</p>

                 </div>
                 <div className=' row-4 '>
                     <p className="course-text">Course</p>
                </div>
            </div>
        </div>
    );
}

export default CardItem;