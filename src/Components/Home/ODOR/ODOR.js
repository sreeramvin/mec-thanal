import './ODOR.css'
import ODORImg from '../../../Assets/ODORImg.png'
export default function OneDoneR(){
  return(
      <div className="ODOR" id="odor">
        <div>
          <p className="ODOR-heading">ONE DAY ONE RUPEE</p>
        </div>
        <div className="ODOR-content">
            <div className="ODOR-content-img">
            <img src={ODORImg} alt="pic"/>
          </div>
          <div className="ODOR-content-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At iaculis ipsum ut sem. Integer convallis nunc nec diam enim nullam nunc sed egestas. Vel hac et dolor aenean orci mattis. Vestibulum volutpat aenean at lacus tortor posuere. Eu, viverra vulputate ornare eu bibendum iaculis posuere quisque sapien.
            </p>
          </div>
          
        </div>
      </div>
  )
}