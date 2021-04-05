import './Header.css'
import LogoLarge from '../../../Assets/logo-large.png'
import frame from '../../../Assets/frame.png'
export default function Header(){
    return(
        <div class="Header">
            <div className="header-logo">
                <img src={LogoLarge} className="header-logo-img"/>
                <div className="header-logo-text">
                    <p className="header-logo-text-p">THANAL MEC</p>
                </div>
            </div>
            <div className="header-updates">
                <img src={frame} className="frame"/>
            </div>
        </div>
    )
}