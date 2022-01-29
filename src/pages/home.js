
import React from 'react';
import '../components/CardItem/CardItem.css';
import './home.css';


function Home(){
    return(
        <div className="home-section center container-fluid">        
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4 home-text">Desarrolla nuevas habilidades para lograr la tan ansiada sensación este es mi año</div>
                <div className="col-1"></div>
                <div className='col-3 img-home-cont'>
                    <img className='img-home' src={process.env.PUBLIC_URL+"img/course.jpg"} alt=""/>
                </div>
                <div className="col-1"></div>

            </div>
        </div>
    );
}

export default Home;