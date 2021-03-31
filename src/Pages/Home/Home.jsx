
import React from "react";
import './Home.css';
import logo from './thanal.png';



const Landing = (props) => {
   
   
    return (
      <>
      <div>
        {/* <div>
            <ul>
                <li><a href="#home">Thanal Mec</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#nabout">About</a></li>
                <li><a href="#ff">Gallery</a></li>
                <li><a href="#ff">Events</a></li>
                <li><a href="#ff">Team</a></li>
                <li><a href="#ff">Works</a></li>
                <li><a href="#ff">Contact Us</a></li>
            </ul>
        /</div> */}
        <div class="navbar">
            <a class="navbar-brand" href="/">
                <div class="logo-image">
                    <img src={logo} alt="text" class="img-fluid"/> 
                </div>
                
            </a>
            <a  class="title" href="#news">
                <div>
                    <h5>THANAL</h5>
                    <h5>MEC</h5>
                </div>
            </a>
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
  
  export default Landing;