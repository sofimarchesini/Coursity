import React from 'react';
import './footer.css';


function Footer(){
    return (
        <footer>
    <div className="container-fluid">
      <div className="row py-2">
        <div className="col-lg-3 brand-description">
          <a className="footer-title-link" href="#"><h1>Online Finance Learning Academy</h1></a>
          <p className="text-description">The best Page to learn about finance</p>
          <ul className="footer-icons">
            <a href="https://www.instagram.com/fendi/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/fendi?lang=es" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/c/Fendi" target="_blank"><i className="fab fa-youtube"></i></a>
            <a href="https://vm.tiktok.com/ZMRm6M1x9/" target="_blank"><i className="fab fa-tiktok"></i></a>
            <a href="https://pin.it/EriWd3j" target="_blank"><i className="fab fa-pinterest"></i></a>
          </ul>     
        </div>
      </div> 
      <div className="subfooter row">
        <div className="col-9">
          <p className="footer-text">
            © ONLINEFINANCELEARNINGACADEMY
          </p>
        </div>
        <div className="country-text col-3">
          <p className="footer-text">UNITED STATES</p>
        </div>
      </div>
    </div>
  </footer>

    )
}
    
export default Footer;