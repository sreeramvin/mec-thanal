import React from "react";
import Home from '../Home/Home'
import tlogo from '../../Assets/thanal.png';
import './About.css';




const About = (props) => {
   
   
    return (
      <>
      <div>
          <Home/>
          <div className="box"></div>
          <div className="mm-image">
            <img src={tlogo} alt="text" /> 
          </div>
          <div className="rectangle">
            <h1>UPDATES</h1>
            
          </div> 
         
          <div className="head">
                <h1>THANAL</h1>
                <h1>MEC</h1>
          </div>
      </div>
      </>
    );
  };
  
  export default About;