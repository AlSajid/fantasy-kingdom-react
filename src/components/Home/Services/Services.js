import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://macabre-alien-67054.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServices(data));

    }, [])

    return (
        < div className="m-3 p-3 container mx-auto" >
            <h2 className="font-bold text-3xl m-3 p-3">Packages</h2>
            <hr />
            <div className="grid lg:grid-cols-3 md:grid-cols-1">
                {
                    services.map(service =>
                        <div className="m-3 p-3 border shadow rounded-3xl">
                            <img className="w-3/4 mx-auto rounded-3xl my-3" src={service.image} alt="tickets" />
                            <div className="m-3 p-3">
                                <h3 className="text-2xl font-bold my-3">{service.title}</h3>
                                <h4 className="text-xl font-bold text-red-600">৳ {service.price}</h4>
                            </div>

                            <Link to={`/order/${service._id}`}>
                                <button className="border border-red-300 text-xl rounded-2xl w-3/4 mx-auto font-bold m-3 p-3 bg-red-600 text-white">Book Now</button>
                            </Link>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default Services;