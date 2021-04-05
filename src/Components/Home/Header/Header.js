import './Header.css';
import tlogo from '../../../Assets/thanal.png'
export default function Header(){
    return(
        <div className="header">
           
           
          <div className="box">

             <img src={tlogo} alt="text" /> 
             <div className="rectangle"></div> 
          </div>
         

          <div className="head">
              <h1>THANAL</h1>
              <h1>MEC</h1>
          </div>
           
        </div>
    )
}