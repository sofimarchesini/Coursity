
import { useContext } from 'react';
import { context } from '../context/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Counter from '../counter/counterCart';



const cartDOM = document.querySelector(".cart");

const Cart = () =>{

    const { cart, clearCart, removeFromCart, addToCart, subTotal, freshTotal} = useContext(context)

    const onAdd = (counter,prod) => {
        prod.quantity = counter
        addToCart(prod)
    }

    return (
        <>
        {cart.lenght!=0 ?
        <>
        <div className="cart-overlay  container-fluid">
            <div className="cart">
                <h2>Cart</h2>
                <div className='cart-cont'>
                    {cart.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <CartItem item={prod}
                                src={prod.image}
                                title={prod.name} 
                                price={prod.price} 
                                id={prod.id}
                                quantity={prod.quantity}/>
                                <div onClick={()=>removeFromCart(prod)}>
                                    <Button  className="remove-button">remove</Button>
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
                    <NavLink to="/" className="close-cart" style={{ textDecoration: 'none',color: 'black'}}>
                        <i className="icon-close" ><FontAwesomeIcon icon="fa-solid fa-rectangle-xmark"/>Go back</i>
                    </NavLink>
                    <div className='button-pay-cont'>
                        <Link to='/cart/pago' style={{ textDecoration: 'none',color: 'black'}}>
                            <i className='button-pay'>Pay here</i>
                        </Link>
                    </div>
                </div>
        </div>
        </>:
        <div>
            <p>No hay nada en el carrito</p>

        </div>
            }
        </>
    )
    
}

export default Cart;