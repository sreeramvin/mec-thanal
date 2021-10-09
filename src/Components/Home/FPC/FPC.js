import './FPC.css'
// import FPCImg from '../../../Assets/FPCImg.png'
export default function FPC(){
  return(
      <div className="FPC">
        <div>
          <p className="FPC-heading">FOOD PACKET COLLECTION</p>
        </div>
        <div className="FPC-content">
          <div className="FPC-content-text">
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