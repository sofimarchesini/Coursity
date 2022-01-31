
import { useContext } from 'react';
import { context } from '../context/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import {NavLink} from 'react-router-dom'


const cartDOM = document.querySelector(".cart");

const Cart = () =>{

    const { cart, clearCart, removeFromCart, sumQuantity, subTotal, freshTotal} = useContext(context)

    return (
        <div className="cart-overlay  container-fluid">
            <div className="cart">
            <h2>Cart</h2>
            <div>
                {cart.map((prod) => {
                return (
                    <div key={prod.id}>
                        <CartItem item={prod}
                            src={prod.image}
                            title={prod.name} 
                            price={prod.price} 
                            id={prod.id}/>
                            <div onClick={()=>removeFromCart(prod)}>
                                <Button  className="material-icons btn-sm bg-gradient">remove</Button>
                            </div>
                    </div>
                )
                })}
            </div>
            <div className="cart-content"></div>
                <div className="cart-footer">
                    <h3>your total : $<span className="cart-total">{freshTotal()}</span></h3>
                    <button onClick={() => clearCart()} className="clear-cart banner-btn">clear cart</button>
                </div>
                <NavLink to="/" className="close-cart">
                    <i className="icon-close" ><FontAwesomeIcon icon="fa-solid fa-rectangle-xmark"/>Go back</i>
                </NavLink>
                <NavLink to='/pago'>
                    <i>Terminar compra</i>
                </NavLink>
            </div>
  
            
        </div>
    )
    
}

export default Cart;