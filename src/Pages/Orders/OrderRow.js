import React, { useEffect, useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const OrderRow = ({ order, i, handleDelete, handleUpdateStatus }) => {
    const { _id, serviceName, customer, price, email, phone, service, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
        .then(data => setOrderService(data))
    }, [service])
    

    return (
        <tr>
        <th>
          {i + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {orderService?.img &&  <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
            <div className='space-y-4'>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
                <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
            <td>{email}</td>
            <td>
                <button onClick={()=>handleUpdateStatus(_id)} className={`${status ?'bg-[#29B170] hover:bg-[#29B170]' : '`bg-[#ff3811] hover:bg-[#ff3811]`'} btn btn-sm border-0`}>{status ? status : 'Pending'}</button>
            </td>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs"><RxCrossCircled size={25}/></button>
        </th>
      </tr>
    );
};
// `btn bg-[#ff3811] hover:bg-[#ff3811] btn-sm border-0`
export default OrderRow;