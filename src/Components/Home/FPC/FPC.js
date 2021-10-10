import './FPC.css'
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";
// import FPCImg from '../../../Assets/FPCImg.png'
export default function FPC(){
  useEffect(() => {
    AOS.init({
      duration: 800
    })
  },[])
  return(
      <div className="FPC">
        <div>
          <p className="FPC-heading" data-aos={"fade-down"}>FOOD PACKET COLLECTION</p>
        </div>
        <div className="FPC-content">
          <div className="FPC-content-text" data-aos={"fade-down"}>
            <p>
            As part of Thanal, Every Friday we collect food packets from students of MEC and distribute it to the poor, homeless and destitute people on the streets. The distribution is carried by Thanal members in Kakkanad town and nearby areas. With this mission, we aim to save poor people from hunger and malnutrition. Every Friday, approximately 100 food packets are distributed.
            </p>
          </div>
          {/* <div className="FPC-content-img">
            <img src={FPCImg} alt="pic"/>
          </div> */}
        </div>
      </div>
  )
}