import ff from '../../../Assets/wave.svg';
import Logo from '../../../Assets/thanal_logo.png';
import './Footer.css';

export default function Footer(){
    return(
        <div className="footer">
            <img src={ff} alt="text" />
            <div className="flogo">
                <div className="fflogo">
                    <img src={Logo} className="flogo-img" />
                    <p className="flogo-text">
                    <span>THANAL</span>
                    <span>MEC</span>
                    </p>
                </div>
                <div>
                    <h1>Contact Us</h1>
                    <p>abcd@gmail.com</p>
                </div>
                <div>
                    <h3>Other Links</h3>
                    <p>TERMS OF USE</p>
                    <p>PRIVACY POLICY</p>
                    <p>FAQ</p>
                </div>
            </div>
             
        </div>
        
    )
}