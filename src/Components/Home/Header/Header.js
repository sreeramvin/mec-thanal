import './Header.css'
import LogoLarge from '../../../Assets/thanal.png'

export default function Header(){

    const scrollUp = () => {
        let pageHeight = window.innerHeight;
        window.scrollTo( {top:pageHeight,behavior:'smooth'});
    }

    return( 
        <div className="Header">
            <div class="header-container">
                <div className="header-logo">
                    <img src={LogoLarge} className="header-logo-img" alt="pic"/>
                </div>
                <p className="header-logo-text-p">THANAL MEC</p>
                <p className="header-logo-college-p">Govt. Model Engineering College, Kochi</p>
                <div className="scroll-down1" onClick={scrollUp}></div>
            </div>
        </div>
    )
}