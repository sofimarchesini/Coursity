
import React, {Component} from 'react';
import './NavBar.css';
import CartWidget from '../Cart/CartWidget';



class NavBar extends Component {
  render(){
    return(
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2"><a className="header-title-link" href="https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m"><h1>Coursity</h1></a></div>
              <div  className="col-9">
                <nav>
                  <ul>
                    <li><a href="https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m">Home</a></li>
                    <li><a href="#woman-initial-section">Categories</a></li>
                    <li><a href="#about-section">About </a></li>
                    <li><a href="#contact-section">Contact </a></li>
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
}

export default NavBar;