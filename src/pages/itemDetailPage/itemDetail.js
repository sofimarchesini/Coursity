import React from 'react';
import { useContext } from 'react';
import { context } from '../../components/context/cartContext';
import './itemDetail.css';
import Counter from '../../components/counter/counterDetail.js';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



const ItemDetail = ({item}) =>{
    
    const { addToCart,freshTotal,prodIncr,prodDecr,cart} = useContext(context)

    const onAdd = (counter) => {
        item.quantity = counter
        addToCart(item)
    }

    return(
        <div >
            <div className="container-fluid section">
                <div className="row row-principal">
                    <div className='col-1'></div>
                    <div className="info-item-detail col-7">
                            <h4 className="name-item">{item?.name}</h4>
                            <h5 className="price-item">${item?.price}</h5>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-7 sub-cont'>
                        <div className=' description'>
                            <strong><p className='detail-text-title'> Description</p></strong>
                            <p className='detail-text'>{item?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-right'>
                <div className='sub-container-1 row'>
                    <img className="img-detail" src={process.env.PUBLIC_URL+item?.image} alt="product" />
                </div>
                <div className='sub-container-2 row  ' > 
                    <Counter prod={item} onAdd={onAdd} />
                </div>
                <div className='row'>
                    <div className='button-cont-comp'>
                        <Link to="/" style={{ textDecoration: 'none' ,border: 'none'}}>
                            <Button style={{ textDecoration: 'none' ,border: 'none'}} className='butt'>Go back</Button>
                        </Link>
                    </div>
                </div>
            </div>
    
        </div>
            
    );
    
}

export default ItemDetail;