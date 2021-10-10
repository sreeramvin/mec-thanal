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
    <div className="About" id="about">
      <div>
        <p className="about-heading" data-aos={"fade-down"}>ABOUT US</p>
      </div>
      <div className="about-content">
        <div className="about-content-text">
          <p className="about-text" data-aos={"fade-down"}>
            THANAL (To Humans A Noble Acme Life) is a non-profit
            organisation of  Govt. Model Engineering College, Cochin.
            THANAL was established as a students' initiative aiming to make a
            qualitative difference in the  lives of the less fortunate.Since 2011,
            THANAL MEC has had an impact on the lives of so many families
            and individuals. THANAL MEC offers to  any heart that yearns,
            the chance to reach out and fulfill our most basic humanitarian
            desires. Ongoing activities include Pratheeksha, in which we cover
            the expenses of a dialysis patient's monthly medical bill. We have
            expanded our resources to LinkedIn  in order to have a greater
            impact on the lives of those who are less fortunate.
            Keep an eye on this space for upcoming activities.
          </p>
        </div>
        {/* <div className="about-content-img">
            <img src={aboutImg} alt="pic"/>
          </div> */}
      </div>
    </div>
  )
}