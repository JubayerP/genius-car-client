import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" alt="banner" />
      </div>
      <div className="absolute flex transform -translate-y-1/2 left-24 top-1/3">
        <h1 className="text-6xl font-bold text-white leading-[75px]">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex transform -translate-y-1/2 w-2/5 left-24 top-2/3">
        <p className="text-white text-xl leading-8">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex transform -translate-y-1/2 w-2/5 left-24 top-[80%]">
        <button className="btn rounded-sm border-0 text-white hover:bg-[#FF3811] bg-[#FF3811] no-animation mr-5">
          Discover More
        </button>
        <button className="btn btn-outline rounded-sm text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] no-animation">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/4">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
        <AiOutlineArrowLeft />
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] border-0">
        <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
