import './FPC.css'
import FPCImg from '../../../Assets/FPCImg.png'
export default function FPC(){
  return(
      <div className="FPC">
        <div>
          <p className="FPC-heading">FOOD PACKET COLLECTION</p>
        </div>
        <div className="FPC-content">
          <div className="FPC-content-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At iaculis ipsum ut sem. Integer convallis nunc nec diam enim nullam nunc sed egestas. Vel hac et dolor aenean orci mattis. Vestibulum volutpat aenean at lacus tortor posuere. Eu, viverra vulputate ornare eu bibendum iaculis posuere quisque sapien.
            </p>
          </div>
          <div className="FPC-content-img">
            <img src={FPCImg}/>
          </div>
        </div>
      </div>
  )
}