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
    image: {gg1},
    caption:"first "
  },
  {
    image: {gg2},
    caption:"second "
  },
  {
    image: {gg3},
    caption:"third "
  },
  {
    image: {gg4},
    caption:"fourth"
  },
  {
    image: {gg5},
    caption:"fifth"
  }
  ];
  
  // const data = [
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        
  //     caption: "San Francisco"
  //   },
  //   {
  //     image:
  //       "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
  //     caption: "Scotland"
  //   },
  //   {
  //     image:
  //       "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
  //     caption: "Darjeeling"
  //   },
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
  //     caption: "San Francisco"
  //   },
  //   {
  //     image:
  //       "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
  //     caption: "Scotland"
  //   },
  //   {
  //     image:
  //       "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  //     caption: "Darjeeling"
  //   },
  //   {
  //     image:
  //       "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
  //     caption: "San Francisco"
  //   },
  //   {
  //     image:
  //       "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
  //     caption: "Scotland"
  //   },
  //   {
  //     image:
  //       "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  //     caption: "Darjeeling"
  //   }
  // ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold"
  };
 
  return (
    <div className="home-gallery">
      <div style={{ textAlign: "center" }} className="home-gallery-heading">
          <h1>Gallery</h1> 
        <div
          style={{
            padding: "0 20px"
          }}
        >
          <Carousel
            data={data}
            time={1500}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
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


