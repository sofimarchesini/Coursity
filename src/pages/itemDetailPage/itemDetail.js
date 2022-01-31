import React from 'react';
import { useContext } from 'react';
import { context } from '../../components/context/cartContext';
import './itemDetail.css';
import Counter from '../../components/counter/counter.js';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



const ItemDetail = (props) =>{
    
    const { addToCart,freshTotal,subTotal} = useContext(context)

    const onAdd = (counter) => {
        props.prod.quantity = counter
        addToCart(props.prod)
        
    }

    return(
        <div className="container-fluid detail-item"> 
            <div className='row fila-inicial'></div>
            <div className='row'>
                <div className='img-cont col-7 '><img className="img-detail" src={props.prod.image} alt="product" /></div>
                <div className="info-item-detail col-4">
                    <h4 className="name-item">{props.prod.name}</h4>
                    <h5 className="price-item">{props.prod.price}</h5>
                    <span className="remove-item" id="${item.id}-remove">
                        <i className="far fa-trash-alt"></i>
                    </span>
                </div>
                <div><h3>your total : $<span className="total-detail">{freshTotal()}</span></h3></div>
            </div>
            <div className='row'>           
                <p className='detail-text'>{props.prod.description}</p>
            </div>
            <Counter prod={props.prod} onAdd={onAdd}/>
            <Link to="/">
                <Button >Continuar comprando</Button>
            </Link>

        </div>
    );
    
}

export default ItemDetail;