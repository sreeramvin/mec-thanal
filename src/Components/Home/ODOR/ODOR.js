import './ODOR.css'
import ODORImg from '../../../Assets/ODORImg.png'
export default function OneDoneR(){
  return(
      <div className="ODOR" id="events">
        <div>
          <p className="ODOR-heading">{`${"ONE DAY ONE RUPEE"}`}</p>
        </div>
        <div className="ODOR-content">
            <div className="ODOR-content-img">
            <img src={ODORImg} alt="pic"/>
          </div>
          <div className="ODOR-content-text">
            <p>
            This is an initiative practised in MEC for long while, through which the students contribute one rupee every day and is collected through students representatives of THANAL from each class at the end of the month. This fund raised through this initiative acts as the major source of financial resource which is further used for the various charitable activities that THANAL organizes. This initiative kindles the spirit to give back to the society in each student and also nurtures the habit to look out for people in need of help. 
            </p>
          </div>
          
        </div>
      </div>
  )
}