import React from 'react';
import './footer.css';


function Footer(){
    return (
        <footer>
    <div class="container-fluid">
      <div class="row py-4">
        <div class="col-lg-3 brand-description">
          <a class="footer-title-link" href="#"><h1>Online Finance Learning Academy</h1></a>
          <p class="text-description">The best Page to learn more about what you like</p>
          <ul class="footer-icons">
            <a href="https://www.instagram.com/fendi/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/fendi?lang=es" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/c/Fendi" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://vm.tiktok.com/ZMRm6M1x9/" target="_blank"><i class="fab fa-tiktok"></i></a>
            <a href="https://pin.it/EriWd3j" target="_blank"><i class="fab fa-pinterest"></i></a>
          </ul>     
        </div>
        <div class="brand-info d-none d-md-block col-4">
          <nav>
            <ul class="info-footer">
              <li><p class="title-nav"><strong>About Coursity</strong> </p></li>
              <li><a class= "footer-text-info" href=" https://www.vogue.com/fashion-shows/designer/fendi" target="_blank">More News</a></li>
              <li><a class= "footer-text-info" href="#contact-section">Contact Us</a></li>
              <li><a class= "footer-text-info" href="https://www.fendiprivatesuites.com/en" target="_blank">Private Suits</a></li>
            </ul>
          </nav>
        </div>          
        <div class="brand-info d-none d-md-block col-4">
          <nav>
            <ul class="info-footer">
              <li><p class="title-nav"><strong>See more stories</strong> </p></li>
              <li><a class= "footer-text-info" href="https://www.standard.co.uk/topic/fendi" target="_blank">Fendi mensware</a></li>
              <li><a class= "footer-text-info" href="https://www.businessoffashion.com/articles/tags/organisations/fendi">Stories</a></li>
              <li><a class= "footer-text-info" href="https://www.gq.com/about/fendi" target="_blank">Is fashion too obsess with Tiktok?</a></li>
            </ul>
          </nav>
        </div>
      </div> 
      <div class="subfooter row">
        <div class="col-9">
          <p class="footer-text">
            © FENDI - TODOS LOS DERECHOS RESERVADOS - P. IVA 00900421009 LICENCIA
            SIAE N. 3566/I/1417 - V. 9.28.11.AS1
          </p>
        </div>
        <div class="country-text col-3">
          <p class="footer-text">ARGENTINA</p>
        </div>
      </div>
    </div>
  </footer>

    )
}
    
export default Footer;