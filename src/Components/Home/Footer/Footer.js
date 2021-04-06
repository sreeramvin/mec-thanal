import wave from'../../../Assets/Vectors.png';
import './Footer.css';
import togo from "../../../Assets/thanal.png";
import social from "../../../Assets/media.png";

export default function Footer(){
    return(
        <div className="footer">
            <img src={wave} alt="random" className="footer-wave"/>
            <div className="f-contents">
               
                <div className="flogo">
                    <img src={togo} className="flogo-img" alt="pic" />
                    <p className="flogo-text">
                    <span>THANAL</span>
                    <span>MEC</span>
                    </p>
                </div>
               
                <div className="footer-links">
                <h3>Contact Us</h3>
                    <h4>abcd@gmail.com</h4>
                    <img src={social} alt="random" className="footer-social"/> 
                </div>
                <div className="footer-links" >
                <h3><a href="#sss">Other Links</a></h3>
                    <p><a href="#sss">TERMS OF USE</a></p>
                    <p><a href="#sss">PRIVACY POLICY</a></p>
                    <p><a href="#sss">FAQ</a></p>
                </div>
            </div>
        </div>
    )
}