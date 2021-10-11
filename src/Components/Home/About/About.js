import './About.css'
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";
// import aboutImg from '../../../Assets/aboutImg.png'
export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 800
    })
  },[])
  return (
    <div className="About">
      <div>
        <p className="about-heading" data-aos={"fade-down"}>ABOUT US</p>
      </div>
      <div className="about-content">
        <div className="about-content-text">
          <p  className="about-text" data-aos={"fade-down"}>
            To Humans, A Noble Acme Life (THANAL) is a social action club 
            organized by the students of MEC dedicated to humanitarian welfare
            and is responsible for raising funds and other amenities to help
            the weaker sections of the society. We work on areas like child
            and social empowerment and humanitarian welfare. THANAL aims
            at encouraging and promoting among young professionals the 
            drive to commit time from their busy schedules towards
            fulfilling their obligations towards society
            {/* Thanal is a social action club dedicated to humanitarian welfare activities. We stand for:
1. Creating awareness among students about the living conditions of our less fortunate fellow beings and to explore avenues where we can be of help to them.
2. Cultivating the awareness that the dignity of the human beings is paramount, and is the source for all human rights.
3. Spreading the message that charity is not a service, but a mandatory duty for every individual. */}
          </p>
        </div>
        {/* <div className="about-content-img">
            <img src={aboutImg} alt="pic"/>
          </div> */}
      </div>
    </div>
  )
}