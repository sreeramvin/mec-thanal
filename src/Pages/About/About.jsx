import React from "react";
import Home from '../Home/Home'
import mm from '../../Assets/thanal.png';
import './About.css';



const About = (props) => {
   
   
    return (
      <>
      <div>
          <Home/>
                   
          {/* <div className="fill"> */}
              
          
              <div className="mm-image">
                <img src={mm} alt="text" /> 
              </div>
              <div className="box">
                  
              </div>
          {/* </div> */}
     
        </div>
      </>
    );
  };
  
  export default About;