
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../NavBar/NavBar.css';
import Badge from 'react-bootstrap/Badge'
import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../context/cartContext'



const CartWidget = () => {

    const {sumQuantity} = useContext(context)

        return (
            <div className='row'>
                <div className='col-3'>
                    <NavLink to="/cart" exact>
                        <span className="icon-header fas fa-shopping-bag">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                    </NavLink>  
                    </div>  
                <div className='col-1'>
                    {sumQuantity() === 0 ? null :
                    <Badge className="badgeCart" >
                        {sumQuantity()}
                    </Badge>
    }
                </div>
            
                
            </div>

      )
    
}

export default CartWidget;
