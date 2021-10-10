import React from "react";
import "./Gallery.css"
import { Carousel } from "react-carousel-minimal";
import gg1 from '../../../Assets/gallery/gg1.jpeg'
import gg2 from '../../../Assets/gallery/gg2.jpeg'
import gg3 from '../../../Assets/gallery/gg3.jpeg'
import gg4 from '../../../Assets/gallery/gg4.jpeg'
import gg5 from '../../../Assets/gallery/gg5.jpeg'

export default function Gallery() {
  const data = [{
    image: gg1,
    // caption:"first "
  },
  {
    image: gg2,
    // caption:"second "
  },
  {
    image: gg3,
    // caption:"third "
  },
  {
    image: gg4,
    // caption:"fourth"
  },
  {
    image: gg5,
    // caption:"fifth"
  }
  ];

  return (
    <div className="home-gallery">
      <div className="home-gallery-heading">
          <h1>GALLERY</h1> 
        <div className="gallery">
          <Carousel
            data={data}
            time={1500}
            width="100%"
            height="500px"
            // captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            // captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              
              textAlign: "center",
              maxWidth: "1000px",
              maxHeight: "500px",
              margin: "20px auto"
            }}
          />
        </div>
      </div>
    </div>
  );
}


