
import React from 'react';
import '../CardItem/CardItem.css';
import './home.css';


const Home = () =>{
    return(
        <div className="home-section center container-fluid">  
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <div className=' text-principal'>Learn withouth limits</div>      
                    <div className=" home-text">Build new skills for that "this is my year" feeling with courses, certificates, and degrees from world-class universities and companies.</div>
                </div>
                <div className="col-1"></div>
                <div className='col-3 img-home-cont'>
                    <img className='img-home' src={process.env.PUBLIC_URL+"img/c.webp"} alt=""/>
                </div>
                <div className="col-1"></div>

            </div>
        </div>
    );
}

export default Home;