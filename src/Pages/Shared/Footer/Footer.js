import React from "react";
import logo from "../../../assets/logo.svg";
import { AiFillGoogleCircle, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer py-32 px-20 bg-[#151515] text-base-content">
      <div className="w-72">
        <img src={logo} alt="logo" className="w-20"/>
        <p className="my-5 text-[#E8E8E8]">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
              </p>
              <div className="flex items-center text-[#E8E8E8]">
                  <AiFillGoogleCircle size={30} className="cursor-pointer"/>
                  <AiFillTwitterCircle size={30} className="cursor-pointer"/>
                  <AiFillInstagram size={30} className="cursor-pointer"/>
                  <AiFillLinkedin size={30} className="cursor-pointer"/>  
              </div>
      </div>
      <div className="text-[#E8E8E8]">
        <span className="font-bold text-xl text-white">About</span>
        <a href="/" className="link link-hover">
          Home
        </a>
        <a href="/" className="link link-hover">
          Service
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
      </div>
      <div className="text-[#E8E8E8]">
        <span className="font-bold text-xl text-white">Company</span>
        <a href="/" className="link link-hover">
          Why Car Doctor
        </a>
        <a href="/" className="link link-hover">
          About
        </a>
      </div>
      <div className="text-[#E8E8E8]">
        <span className="font-bold text-xl text-white">Support</span>
        <a href="/" className="link link-hover">
          Support Center
        </a>
        <a href="/" className="link link-hover">
          Feedback
        </a>
        <a href="/" className="link link-hover">
        Accessbility
        </a>
      </div>
    </footer>
  );
};

export default Footer;
