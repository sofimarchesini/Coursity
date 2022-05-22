
import React from 'react';
import './NavBar.css';
import CartWidget from '../Cart/CartWidget';
import {Link} from 'react-router-dom';



const NavBar = () => {
    return(
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 header-title ">
                <Link to= '/'  style={{ textDecoration: 'none' ,color: 'black'}}>
                    <h1 className='header-title-link'>Online Finance Learning Academy</h1>
                </Link>
                </div>
              <div  className="col-6">
                <nav>
                  <ul>
                    <li><Link to= '/'>Home</Link></li>
                    <li><Link to='/About' >About</Link></li>
                  </ul>
                </nav>
              </div>
              <div  className="col-1">
                <CartWidget/>
              </div>
            </div>
          </div>
        </header>
    )
  }


export default NavBar;