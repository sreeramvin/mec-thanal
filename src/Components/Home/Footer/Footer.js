import wave from'../../../Assets/Vectors.png';
import './Footer.css';
import togo from "../../../Assets/thanal.png";
import {FaInstagram, FaFacebookF, FaLinkedin} from 'react-icons/fa';


export default function Footer(){
    return(
        <div className="footer">
            <img src={wave} alt="random" className="footer-wave"/>
            <div className="f-contents">
               
                <div className="flogo">
                    <img src={togo} className="flogo-img" alt="pic" />
                    <p>
                    <span className="flogo-text">THANAL <br /> MEC</span>
                    
                    </p>
                </div>
                <div className="footer-h"/>
                <div className="footer-links">
                    <p>Contact Us</p>
                    <p>thanalmec.mec@gmail.com</p>
                    <div className="social-links">
                        <FaInstagram className="social-links-item"/><a href=""></a>
                        <FaFacebookF className="social-links-item"/><a href=""></a>
                        <FaLinkedin className="social-links-item"/><a href="">https://www.linkedin.com/company/thanalmec</a>
                    </div>
                </div>
                <div className="footer-h"/>
                <div className="footer-links" >
                <p><a href="#sss">Other Links</a></p>
                    <p><a href="#sss">TERMS OF USE</a></p>
                    <p><a href="#sss">PRIVACY POLICY</a></p>
                    <p><a href="#sss">FAQ</a></p>
                </div>
            </div>
        </div>
    )
}