import './Gallery.css';
import img from '../../Assets/images.jpeg';
export default function Gallery(){
    return(
        <div>
            <h1 className="heading">GALLERY</h1>
            <div className="gallery">
            <div className="flex">
                <div className="box one ">
                    <img src={ img } alt="Gallery Image" className="img" />
                </div>
                <div className="box two ">
                    <img src={ img } alt="Gallery Image" className="img" />
                </div>
                <div className="box three ">
                    <img src={ img } alt="Gallery Image" className="img" />
                </div>
                <div className="box one ">
                    <img src={ img } alt="Gallery Image" className="img" />
                </div>
                <div className="box two ">
                    <img src={ img } alt="Gallery Image" className="img" />
                </div>
                <div className="box three ">
                    <img src={ img } alt="Gallery Image" className="img" />
                </div>
            </div>
            </div>
        </div>
    )
}