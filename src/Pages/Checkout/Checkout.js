import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import details from '../../assets/images/details/details.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {title, price, _id} = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Your order has been submited!');
                }
            })
        .catch(e => console.error(e))
    }

    return (
        <div>
            <div className='relative mt-12 mb-32'>
            <div className="serviceHeader">
                <img src={details} alt="" className='relative w-full'/>
            </div>
            <h3 className="text-4xl font-bold absolute top-1/2 right-3/4 text-white">Check Out</h3>
            <div className='clip-path'>
                <h3 className='absolute bottom-1.5 left-[25%] text-xl'>Home/Checkout</h3>
            </div>
            </div>
            <form onSubmit={handlePlaceOrder} className='max-w-4xl bg-[#f3f3f3] p-24 mx-auto mb-32'>
            <h2 className="text-3xl font-bold mb-5">{ title}</h2>
            <h2 className="text-3xl font-bold mb-5">Price ${ price}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="Firs Name" className="input w-full max-w-sm focus:outline-0" required/>
                    <input name='lastName' type="text" placeholder="Last Name" className="input w-full max-w-sm focus:outline-0" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input w-full max-w-sm focus:outline-0" required/>
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input w-full max-w-sm focus:outline-0" readOnly/>
                </div>
                <textarea name='message' className="textarea w-full focus:outline-0 mt-4" placeholder="Your Message" required></textarea>
                <button className='btn rounded no-animation bg-[#ff3811] hover:bg-[#ff3811] border-0 btn-block capitalize mt-6'>Order Confirm</button>
            </form>
        </div>
    );
};

export default Checkout;