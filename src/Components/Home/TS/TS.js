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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At iaculis ipsum ut sem. Integer convallis nunc nec diam enim nullam nunc sed egestas. Vel hac et dolor aenean orci mattis. Vestibulum volutpat aenean at lacus tortor posuere. Eu, viverra vulputate ornare eu bibendum iaculis posuere quisque sapien.
            </p>
          </div>
          {/* <div className="TS-content-img">
            <img src={TSImg} alt="pic"/>
          </div> */}
        </div>
      </div>
  )
}