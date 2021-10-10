import g36 from './../../../Assets/Group 36.png'
import care from './../../../Assets/care.png'
import g38 from './../../../Assets/g38.png'
import r35 from './../../../Assets/r35.png'
import g39 from './../../../Assets/g39.png'
import ff from './../../../Assets/fullform.png'
import g40 from './../../../Assets/g40.png'
import g41 from './../../../Assets/g41.svg'


import {FaFacebook, FaLinkedin, FaInstagramSquare, FaTelegram} from 'react-icons/fa'
import './header2.css'

export default function header(){

    const scrollUp = () => {
        let pageHeight = window.innerHeight;
        window.scrollTo( {top:pageHeight,behavior:'smooth'});
    }

    return(
        <div className = "header">
            <div className = "first">
                <img src = {g36}  alt="pic" style = {{width: '6%', maxWidth: '60px'}} />
                <img src = {care} alt="pic" style = {{maxWidth: '580px', width: '70%', height: 'auto', marginBottom: '2%', marginLeft: '2%'}}/>
            </div>
            <div style = {{zIndex: 1}}>
                <img src = {g38} alt="pic" style = {{height: 'auto', width: '6%', marginLeft: '-4%', zIndex: 2}} />
                <img src = {r35} alt="pic" style = {{height: 'auto', width: '60%', maxWidth: '700px', marginLeft: '-2%', marginTop: '-2%', zIndex: 1}} />
                <img src = {g39} alt="pic" style = {{height: 'auto', width: '3%',marginTop: '-22%',  zIndex: 2}} />
                <img src = {ff} alt="pic" style = {{height: 'auto', width: '25%',marginTop: '-22%', marginLeft: '2%',  zIndex: 2}} />
            </div>
            <div style = {{ zIndex: 2}}>
                <div style = {{float: 'left'}} className="header-social">
                    <div>
                    <a className="social-links-2" href="https://www.facebook.com/mecthanal/" target="_blank" rel="noreferrer"><FaFacebook style = {{fontSize: '30px', margin: '5px'}}/></a>
                    <a className="social-links-1" href="https://www.linkedin.com/company/thanalmec" target="_blank" rel="noreferrer"><FaLinkedin style = {{fontSize: '30px', margin: '5px'}}/></a>
                    </div>
                    <div>
                    <a className="social-links-1" href="https://instagram.com/thanalmec?utm_medium=copy_link" target="_blank" rel="noreferrer"><FaInstagramSquare style = {{fontSize: '30px', margin: '5px'}}/></a>
                    <a className="social-links-1" href="https://t.me/joinchat/75Y5RG0EGvs0MTg1" target="_blank" rel="noreferrer"><FaTelegram style = {{fontSize: '30px', margin: '5px'}}/></a>
                    </div>
                </div>
                <img src = {g40} alt="pic" style = {{height: 'auto', width: '20%', marginLeft: '8%',  zIndex: 3, float: 'left'}} />
                <img src = {g41} alt="pic" style = {{height: 'auto', width: '50%', marginLeft: '4%', marginTop: '-18%',  zIndex: 3, float: 'left'}} />

            </div>
            {/* <div className="scroll-down " onClick={scrollUp}></div> */}
        </div>
    )
}