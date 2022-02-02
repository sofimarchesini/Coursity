import React from 'react';
import {Link} from 'react-router-dom';
import './itemFilter.css';
import Dropdown from 'react-bootstrap/Dropdown'

const ItemFilter = ()=>{

    return (
        <Dropdown className=" text-center">
            <Dropdown.Toggle className="filter-buttonn">Filter</Dropdown.Toggle>
            <Dropdown.Menu>
                <li className='filter-item'><Link to= '/category/finance'  style={{ textDecoration: 'none' ,color: 'black'}}>finance</Link></li>
                <li className='filter-item'><Link to= '/category/science' style={{ textDecoration: 'none',color: 'black' }}>science</Link></li>
                <li className='filter-item'><Link to= '/category/programming' style={{ textDecoration: 'none',color: 'black' }}>programming</Link></li>
                <li className='filter-item'><Link to= '/category/psichology' style={{ textDecoration: 'none',color: 'black' }}>psichology</Link></li>
            </Dropdown.Menu>
        </Dropdown>

    )

}

export default ItemFilter;