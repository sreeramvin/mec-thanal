import './Header.css'
import LogoLarge from '../../../Assets/thanal.png'

export default function Header(){
    return( 
        <div className="Header">
            <div class="header-container">
                <div className="header-logo">
                    <img src={LogoLarge} className="header-logo-img" alt="pic"/>
                    <p className="header-logo-text-p">THANAL MEC</p>
                    <p className="header-logo-college-p">Government Model Engineering College, Kochi</p>
                    <div class="scroll-down "></div>
                </div>
            </div>
        </div>
    )
}