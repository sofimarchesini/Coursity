import React from 'react';
import './footer.css';


function Footer(){
    return (
        <footer>
    <div class="container-fluid">
      <div class="row py-2">
        <div class="col-lg-3 brand-description">
          <a class="footer-title-link" href="#"><h1>Online Finance Learning Academy</h1></a>
          <p class="text-description">The best Page to learn about finance</p>
          <ul class="footer-icons">
            <a href="https://www.instagram.com/fendi/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/fendi?lang=es" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/c/Fendi" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://vm.tiktok.com/ZMRm6M1x9/" target="_blank"><i class="fab fa-tiktok"></i></a>
            <a href="https://pin.it/EriWd3j" target="_blank"><i class="fab fa-pinterest"></i></a>
          </ul>     
        </div>
      </div> 
      <div class="subfooter row">
        <div class="col-9">
          <p class="footer-text">
            © ONLINEFINANCELEARNINGACADEMY
          </p>
        </div>
        <div class="country-text col-3">
          <p class="footer-text">UNITED STATES</p>
        </div>
      </div>
    </div>
  </footer>

    )
}
    
export default Footer;