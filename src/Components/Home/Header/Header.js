import './Header.css'
import LogoLarge from '../../../Assets/thanal.png'
import frame from '../../../Assets/frame.png'
export default function Header(){
    return(
        // <div class="Header">
        //     <div className="header-logo">
        //         <img src={LogoLarge} className="header-logo-img"/>
        //         <div className="header-logo-text">
        //             <p className="header-logo-text-p">THANAL </p>
        //             <p className="header-logo-text-p"> MEC</p>
        //         </div>
        //     </div>
        //     <div className="header-updates">
        //         <img src={frame} className="frame"/>
        //     </div>
        // </div>
        <div className="header">


        <div className="box">

           <img src={LogoLarge} alt="text" /> 
           <div className="rectangle"></div> 
        </div>


        <div className="head">
            <h1>THANAL</h1>
            <h1>MEC</h1>
        </div>
        /</div>
    )
}