import './About.css'
import aboutImg from '../../../Assets/aboutImg.png'
export default function About(){
  return(
      <div className="About">
        <div>
          <p className="about-heading">ABOUT US</p>
        </div>
        <div className="about-content">
          <div className="about-content-text">
            <p>
            To Humans, A Noble Acme Life (THANAL) is a social action club organized by the students of MEC dedicated to humanitarian welfare and is responsible for raising funds and other amenities to help the weaker sections of the society. We work on areas like child and social empowerment and humanitarian welfare inspired by the Gandhian principles of Sarvodaya.
            <br></br>
            We aspire to bring about a change in the world. We want to be a shade and comfort to the society's downtrodden!
            </p>
          </div>
          <div className="about-content-img">
            <img src={aboutImg} alt="pic"/>
          </div>
        </div>
      </div>
  )
}