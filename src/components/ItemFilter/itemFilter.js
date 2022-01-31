import React from 'react';
import {Link} from 'react-router-dom';
import './itemFilter.css';
import Dropdown from 'react-bootstrap/Dropdown'

const ItemFilter = ()=>{

    return (
        <Dropdown className="itemFilter text-center">
            <Dropdown.Toggle className="filter-button">Filter</Dropdown.Toggle>
            <Dropdown.Menu>
                <li><Link to= '/category/finance'>finance</Link></li>
                <li><Link to= '/category/science'>science</Link></li>
                <li><Link to= '/category/programming'>programming</Link></li>
                <li><Link to= '/category/psichology'>psichology</Link></li>
            </Dropdown.Menu>
        </Dropdown>

    )

}

export default ItemFilter;