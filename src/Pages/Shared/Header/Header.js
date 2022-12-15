import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const menuItems = (
    <>
      <li className="hover:text-[#FF3811]">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-[#FF3811]">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:text-[#FF3811]">
        <Link to="/services">Services</Link>
      </li>
      <li className="hover:text-[#FF3811]">
        <Link to="/orders">My Orders</Link>
      </li>
      <li className="hover:text-[#FF3811]">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="hover:text-[#FF3811]">
        <Link to="/login">Signin</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-86">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            <div className="flex items-center pl-4 space-x-2">
              <BsHandbag size={24} className="" />
              <IoIosSearch size={24} className="" />
            </div>
          </ul>
        </div>
        <Link to="/" className="">
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="md:space-x-6 menu-horizontal px-1 font-semibold">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <BsHandbag size={24} className="hidden lg:block" />
        <IoIosSearch size={24} className="hidden lg:block" />
        <button className="btn btn-outline rounded-sm text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-white no-animation">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
