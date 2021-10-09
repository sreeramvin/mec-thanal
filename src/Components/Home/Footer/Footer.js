import wave from'../../../Assets/Vectors.png';
import './Footer.css';
import togo from "../../../Assets/thanal.png";
import {FaInstagram, FaFacebookF, FaLinkedin} from 'react-icons/fa';


export default function Footer(){
    return(
        <div className="footer">
            <img src={wave} alt="random" className="footer-wave"/>
            <div className="f-contents">
                
                <div className="footer-links">
                <p className="link-heading">Follow Us</p>
                <div className="social-links">
                <a className="social-links-1" href="https://instagram.com/thanalmec?utm_medium=copy_link" target="_blank"><FaInstagram className="social-links-item"/></a>
                <a className="social-links-1" href="https://www.facebook.com/mecthanal/" target="_blank"><FaFacebookF className="social-links-item"/></a>
                <a className="social-links-1" href="https://www.linkedin.com/company/thanalmec" target="_blank"><FaLinkedin className="social-links-item"/></a>
                </div>
                    <p className="link-heading">Contact Us</p>
                    <p>thanalmec.mec@gmail.com</p>
                    
                </div>
                
            </div>
        </div>
    )
}