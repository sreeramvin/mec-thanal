import './Gallery.css';

import imgg from '../../Assets/images.jpeg';
export default function Gallery(){
    return(
        <div>
            
            <h1 className="heading">GALLERY</h1>
            <div className="gallery">
            <div className="flex">
                <div className="box one ">
                    <img src={ imgg } alt="Gallery " className="images" />
                </div>
                <div className="box two ">
                    <img src={ imgg } alt="Gallery " className="images" />
                </div>
                <div className="box three ">
                    <img src={ imgg } alt="Gallery" className="images" />
                </div>
                <div className="box one ">
                    <img src={ imgg } alt="Gallery " className="images" />
                </div>
                <div className="box two ">
                    <img src={ imgg } alt="Gallery " className="images" />
                </div>
                <div className="box three ">
                    <img src={ imgg } alt="Gallery" className="images" />
                </div>
            </div>
            </div>
        </div>
    )
}