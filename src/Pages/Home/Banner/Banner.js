import React from "react";
import img1 from "../../../assets/images/banner/1.png";
import img2 from "../../../assets/images/banner/2.png";
import img3 from "../../../assets/images/banner/3.png";
import img4 from "../../../assets/images/banner/4.png";
import img5 from "../../../assets/images/banner/5.png";
import img6 from "../../../assets/images/banner/6.png";
import "./Banner.css";
import BannerItem from "./BannerItem";

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: img6,
            prev: 5,
            id: 6,
            next: 1
        },
    ]
  return (
      <div className="carousel w-full rounded-lg">
          {
              bannerData.map(slide => <BannerItem
                  key={slide.id}
                  slide={slide}

              />)
          }
      {/* <BannerItem image={img1}/>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" alt="banner" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/2">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
