import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server-mu-drab.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setOrders(data)
        })
    }, [user?.email, logOut])
    
    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`https://genius-car-server-mu-drab.vercel.app/orders/${id}`, {
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
        fetch(`https://genius-car-server-mu-drab.vercel.app/orders/${id}`, {
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