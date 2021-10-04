import React, { Component } from "react";
import "./Gallery.css";
import ImageGallery from "react-image-gallery";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

class Gallery extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  Libimages = [
    "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/233760708_4367782226601984_50206183618241412_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=730e14&_nc_ohc=1wXRPVEYxMQAX-I7Bkl&tn=XOb7Q466OFLwRyz7&_nc_ht=scontent-lhr8-1.xx&oh=0de85a39f6eb9398629cf7a351c72570&oe=61159B80",
    "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/233906614_4367782286601978_4219222969810502723_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=730e14&_nc_ohc=Hu-KXZHnmeMAX9RUS89&_nc_ht=scontent-lhr8-2.xx&oh=c48567a0ef0d7db1b3567ce9ab0fdeac&oe=6115CB02",
    "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/234303687_4367782243268649_8531166446075500454_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=730e14&_nc_ohc=UrzLyQyJ8XYAX8RbhBa&_nc_ht=scontent-lhr8-2.xx&oh=1c4a4313e68965460028c53e6ff1d602&oe=611586EC",
  ].map((Image) => ({
    src: Image,
  }));
  Gallery = () => {
    return (
      <div className="gallery">
        <Carousel
          images={this.Libimages}
          style={{
            height: 500,
            width: 800,
            marginLeft: 360,
            marginBottom: 100,
            top: "155px",
            backgroundColor: "orange",
          }}
        />

        {/* {this.images.map((slide, indax) => {
          return <img src={slide} alt="me" className="slider"></img>;
        })} */}
      </div>
    );
  };
  render() {
    return this.Gallery();
  }
}
export default Gallery;
