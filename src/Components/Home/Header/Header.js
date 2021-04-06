import './Header.css'
import LogoLarge from '../../../Assets/thanal.png'
import frame from '../../../Assets/frame.png'
export default function Header(){
    return(
        <div class="Header">
            <div className="header-logo">
                <img src={LogoLarge} className="header-logo-img" alt="pic"/>
                <div className="header-logo-text">
                    <p className="header-logo-text-p">THANAL MEC</p>
                </div>
            </div>
            <div className="header-updates">
            </div>
        </div>
    )
}