import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:5000/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-32">
      <div className="text-center w-1/2 mx-auto mb-12">
        <p className="text-xl font-bold text-[#ff3811]">Services</p>
        <h2 className="text-[#151515] text-5xl font-bold my-5">
          Our Service Area
        </h2>
        <span className="text-base leading-8">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline rounded-md text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] no-animation">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
