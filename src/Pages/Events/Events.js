import './Events.css'
import heart from '../../Assets/heart.png';
import box from '../../Assets/box.png';
import tbox from '../../Assets/ODORImg.png';



export default function Events(){
    return(
        <div className="events-header">
            <h1>Events</h1>
            <div className="events">
                <div className="event">
                    <h1>One Day</h1>
                    <h1>One Rupee</h1>
                    <img src={tbox} alt="pic"/>
                    <h1 className="event-donate">Dontate</h1>
                </div>
                <div className="event">
                    <h1>Food Packet</h1>
                    <h1>Collection</h1>
                    <img src={box} alt="pic"/>
                    <h1 className="event-donate">Dontate</h1>
                </div>
                <div className="event">
                    <h1>Thanal</h1>
                    <h1>Stall</h1>
                    <img src={heart} alt="pic"/>
                    <h1 className="event-donate">Dontate</h1>
                </div>
            </div>
         
    </div>
    )
}