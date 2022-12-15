import React from "react";
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, _id, price, title } = service;
  return (
    <div className="card border min-h-fit">
      <figure className="px-6 pt-6">
        <img src={img} className="rounded-xl h-[235px]" alt="service" />
      </figure>
      <div className="card-body py-5">
        <h2 className="card-title font-bold text-2xl text-[#444]">{title}</h2>
        <div className="card-actions flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-[#ff3811]">Price: ${price}</h3>
          <Link to={`/services/${_id}`}>
          <BsArrowRightShort size={35} color='#ff3811' className="cursor-pointer"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
