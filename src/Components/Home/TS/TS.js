import './TS.css'
 import TSImg from '../../../Assets/TSImg.png'
export default function TS(){
  return(
      <div className="TS">
        <div>
          <p className="TS-heading">THANAL STALL</p>
        </div>
        <div className="TS-content">
          <div className="TS-content-text">
            <p>
            Thanal Stall is a three-day event organized by THANAL every year on Excel. A platform aimed to raise funds while showcasing the talents of the students has touched the hearts of many. The students demonstrate their skills and talents through a variety of art displays, including paintings, arts and crafts, live caricature, Mehendi, nail art and many others. The stall receives magnanimous support from students, teachers and Ex-Mecians equally. The funds raised from the stall are used for various initiatives of THANAL.
            </p>
          </div>
          <div className="TS-content-img">
            <img src={TSImg} alt="pic"/>
          </div>
        </div>
      </div>
  )
}