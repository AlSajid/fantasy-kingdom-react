import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://macabre-alien-67054.herokuapp.com/service/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));

    }, [id]);

    const { include } = product;

    const history = useHistory();


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = values => {

        axios.post('https://macabre-alien-67054.herokuapp.com/addOrder', values)
            .then(response => {

                if (response.data.insertedId) {
                    alert('Booking has been confirmed successfully');
                    reset();
                    history.push("/MyOrder");
                }
            })
    }


    return (
        <div className="grid container my-3 p-3 m-auto  lg:grid-cols-2 md:grid-cols-1">
            {/* service information */}
            <div className="m-3 p-3">

                {/* image */}
                <div className="m-3 p-3">
                    <img className="rounded-3xl w-1/2 m-auto" src={product.image} alt="ticket" />
                </div>

                <h2 className="text-3xl font-bold m-3 p-3 text-center">{product.title}</h2>
                <div className="m-3 p-3">
                    <h3 className="text-lg font-bold">Include -</h3>
                    <ul>
                        {
                            include ? include.map((item) => (<li>- {item}</li>))
                                : include
                        }
                    </ul>
                </div>
                <div className="m-3 p-3">
                    <h3 className="text-lg font-bold">Description</h3>
                    <div dangerouslySetInnerHTML={{ __html: product.description }} ></div>
                    <p className="text-red-600 font-bold my-3 py-3 text-3xl">Price: {product.price} Taka</p>
                </div>
            </div>

            {/* Booking form */}
            <div className="m-3 p-3 shadow">
                <h2 className="text-3xl font-bold m-3 p-3">Booking Form</h2>
                <hr />
                <form className="m-3 p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="m-3 p-3">
                        <label>Your Name</label>
                        <input type="text" {...register("name", { required: true, maxLength: 20 })} value={user.displayName} className="border w-full my-3 p-3" />
                    </div>
                    <div className="m-3 p-3">
                        <label>Email</label>
                        <input
                            id="email"
                            {...register("email", {
                                required: "required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,

                                }
                            })}
                            type="email"
                            className="border w-full my-3 p-3"
                            value={user.email}
                        />

                    </div>
                    <div className="m-3 p-3">
                        <label>Address</label>
                        <input {...register("address", { required: true, maxLength: 20 })} placeholder="Dhaka, Bangladesh" className="border w-full my-3 p-3" />
                    </div>
                    <div className="m-3 p-3">
                        <label>Quantity</label>
                        <input type="number" {...register("quantity", { required: true, min: 1, max: 4 })} placeholder="1" className="border w-full my-3 p-3" min="1" max="4" />
                    </div>

                    <div className="text-center">
                        <input type="submit" className="border border-red-300 text-xl rounded-2xl w-3/4 font-bold my-3 p-3 bg-red-600 text-white" value="Book Now" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Order;