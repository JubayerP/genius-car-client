import React from "react";
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="rounded-lg w-4/5"
            alt=""
          />
          <img
            src={parts}
            className="rounded-lg absolute w-3/5 right-5 top-1/2 border-t-[10px] border-l-[10px] border-white"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-2xl text-[#FF3811] font-bold mb-4">About Us.</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="pb-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn rounded-sm border-0 text-white hover:bg-[#d33010] bg-[#FF3811] no-animation mr-5">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
