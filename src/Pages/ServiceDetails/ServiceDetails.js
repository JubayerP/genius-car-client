import React from 'react';
import { useLoaderData } from 'react-router-dom';
import details from '../../assets/images/details/details.png';
import './ServiceDetails.css';
import logo from '../../assets/logo.svg'

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const { title, img, description, facility, price,  } = service;
    return (
        <div>
            <div className='relative mt-12'>
            <div className="serviceHeader">
                <img src={details} alt="" className='relative w-full'/>
            </div>
            <h3 className="text-4xl font-bold absolute top-1/2 right-3/4 text-white">Service Details</h3>
            <div className='clip-path'>
                <h3 className='absolute bottom-1.5 left-[25%] text-xl'>Home/Service</h3>
            </div>
            </div>
            
            <div className='grid grid-cols-3 gap-4 my-32'>
                <div className='col-span-2'>
                    <img src={img} alt="" className='max-w-xl rounded-md' />
                    <h2 className='text-4xl text-[#151515] font-bold mt-12 mb-7'>{title}</h2>

                    <p className='text-base text-[#737373] w-3/4 text-justify'>{description}</p>

                    <div className='grid grid-cols-2 gap-4 mt-7'>
                        {
                            facility.map((f, i) => <div key={i} className='bg-[#f3f3f3] p-10 rounded-lg border-t-2 border-[#ff3811]'>
                                <h5 className='mb-3 text-xl font-bold text-[#444444]'>{f.name}</h5>
                                <p>{f.details}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div className=''>
                    <div className='bg-[#151515] w-[300px] py-12 rounded-lg'>
                        <img className='mx-auto mb-5' src={logo} alt="" />
                        <h4 className='text-white text-xl font-bold text-center'>
                        Need Help? We Are Here To Help You
                        </h4>
                        <div className='bg-white relative w-[270px] h-[126px] mx-auto mt-7 pt-5 px-11 pb-11'>
                            <h5 className='text-xl font-bold text-[#ff3811] text-center'>Car Doctor <span className='text-[#151515]'>Special</span></h5>
                            <h6 className='text-base font-bold text-[#737373] text-center'>Save up to <span className='text-[#ff3811]'>60% off</span></h6>
                            <div className='text-center'>
                            <button className='btn rounded no-animation bg-[#ff3811] hover:bg-[#ff3811] border-0 absolute -bottom-5 right-[70px] capitalize'>Get A Quote</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-4xl font-bold text-[#151515] my-7'>Price ${price}</h3>
                        <button className='btn rounded no-animation bg-[#ff3811] hover:bg-[#ff3811] border-0 btn-wide capitalize'>Proceed Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;