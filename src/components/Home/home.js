
import React from 'react';
import '../CardItem/CardItem.css';
import './home.css';


const Home = () =>{
    return(
        <div className="home-section center container-fluid">  
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <div className=' text-principal'>Learn withouth limits</div>      
                    <div className=" home-text">We strive to bring to earth the complexities of the financial world to everyone’s hands, in the pursue to navigate it in the best way possible</div>
                </div>
                <div className="col-1"></div>
                <div className='col-2 img-home-cont'>
                    <img className='img-home' src={process.env.PUBLIC_URL+"img/course.jpg"} alt=""/>
                </div>
                <div className="col-1"></div>

            </div>
        </div>
    );
}

export default Home;