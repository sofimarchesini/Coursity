
import React, {Component} from 'react';
import './NavBar.css';


class NavBar extends Component {
  render(){
    return(
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2"><a className="header-title-link" href="https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m"><h1>Coursera</h1></a></div>
              <div  className="col-9">
                <nav>
                  <ul>
                    <li><a href="https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m">Home</a></li>
                    <li><a href="#woman-initial-section">Woman</a></li>
                    <li><a href="#about-section">About us</a></li>
                    <li><a href="#stores-section">Stores</a></li>
                    <li><a href="#contact-section">Contact us</a></li>
                  </ul>
                </nav>
              </div>
              <div  className="col-1">
                <div className="cart-button"><i className="icon-header fas fa-shopping-bag"></i></div>
              </div>
            </div>
          </div>
        </header>
    )
  }
}

export default NavBar;