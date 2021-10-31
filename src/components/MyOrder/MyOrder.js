import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://macabre-alien-67054.herokuapp.com/myOrder/${user.email}`)
            .then(response => response.json())
            .then(data => setMyOrders(data));

    }, [user.email]);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://macabre-alien-67054.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Booking has been cancelled');
                        const remainingMyOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingMyOrders);
                    }
                });
        }
    }

    return (
        <div>
            <div className="container m-auto my-3 p-3">

                <h2 className="font-bold text-3xl m-3 p-3">My Orders</h2>
                <hr />
                <div className="grid lg:grid-cols-3 md:grid-cols-1">
                    {
                        myOrders.map(order =>
                            <div className="m-3 p-3 border shadow rounded-3xl">
                                <div className="m-3 p-3">
                                    <h3 className="text-xl font-semibold">Name: {order.name}</h3>
                                    <h3 className="text-xl font-semibold">Email {order.email}</h3>
                                    <h3 className="text-xl font-semibold">Quantity: {order.quantity}</h3>
                                </div>
                                <div className="text-center">
                                    <button className="border border-red-300 text-xl rounded-2xl w-3/4 font-bold m-3 p-3 bg-red-600 text-white" onClick={() => handleDeleteOrder(order._id)}>Cancel Booking</button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default MyOrder;