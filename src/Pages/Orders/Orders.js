import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email])
    
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('Order Removed!');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
            })
        }
    }

    const handleUpdateStatus = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast('Order Approved')
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';

                   const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
                            <th>
                                No
        </th>
        <th className='capitalize'>Customer</th>
        <th className='capitalize'>Services</th>
        <th className='capitalize'>Email</th>
        <th className='capitalize'>Status</th>
        <th className='capitalize'>Remove</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
                        {
                            orders.map((order, i) => <OrderRow key={order._id} order={order} i={i} handleDelete={handleDelete} handleUpdateStatus={ handleUpdateStatus} />)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;