
import React from "react";
import './Home.css';
import logo from '../../Assets/thanal.png';



const Home = (props) => {
   
   
    return (
      <>
       <div className="body">
            <div className="logo-image">
                <img src={logo} alt="text" className="img-fluid"/> 
            </div>    
            <div className="title">
                <h5>THANAL</h5>
                <h5>MEC</h5>
            </div>  
            <div className="navbar">
                <a href="#news">Home</a>
                <a href="#news">About</a>
                <a href="#news">Gallery</a>
                <a href="#news">Events</a>
                <a href="#news">Team</a>
                <a href="#news">Contact Us</a>
            </div>
       </div>
      </>
    );
  };
  
  export default Home;