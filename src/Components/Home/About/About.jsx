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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At iaculis ipsum ut sem. Integer convallis nunc nec diam enim nullam nunc sed egestas. Vel hac et dolor aenean orci mattis. Vestibulum volutpat aenean at lacus tortor posuere. Eu, viverra vulputate ornare eu bibendum iaculis posuere quisque sapien.
            </p>
          </div>
          <div className="about-content-img">
            <img src={aboutImg}/>
          </div>
        </div>
      </div>
  )
}