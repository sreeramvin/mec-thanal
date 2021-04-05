import './Team.css';
import staff from '../../Assets/photo.png';
import core1 from '../../Assets/profile1.png';
export default function Team() {
    return ( 
        <div>
        <h1 className="heading"> CORE TEAM 2020 </h1>  
        <div className="staff">
        <img src = { staff } className = "photo" />
        <p className="staff-name">Sreenivas P</p>
        <p>STAFF IN CHARGE</p>
        </div>
        <div className="core-team">
        <div className="flex-container">
            <div className="flex-item">
                <img src={ core1 } className="core"/>
                <p className="members">
                    Name <br /> Designation 
                </p>
            </div>
            <div className="flex-item">
                <img src={ core1 } className="core"/>
                <p className="members">
                    Name <br /> Designation 
                </p>
            </div>
            <div className="flex-item">
                <img src={ core1 } className="core"/>
                <p className="members">
                    Name <br /> Designation 
                </p>
            </div>
        </div>
        <div className="flex-container">
            <div className="flex-item">
                <img src={ core1 } className="core"/>
                <p className="members">
                    Name <br /> Designation 
                </p>
            </div>
            <div className="flex-item">
                <img src={ core1 } className="core"/>
                <p className="members">
                    Name <br /> Designation 
                </p>
            </div>
            <div className="flex-item">
                <img src={ core1 } className="core"/>
                <p className="members">
                    Name <br /> Designation 
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}