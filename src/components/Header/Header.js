import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div className="bg-blue-900 shadow">
            <div className="p-3">
                <Link to="/">
                    <img src="https://fantasykingdom.net/wp-content/uploads/2020/10/fantasy-logo-white.png" alt="logo" className="object-contain m-auto" />
                </Link>
            </div>
            <div className="container m-auto ">
                {
                    user.email ?
                        (
                            <div>
                                <ul className="cursor-pointer text-center">
                                    <li className="md:block lg:inline-block text-lg text-white p-3 font-semibold">{user.displayName}</li>
                                    <Link to="/MyOrder">
                                        <li className=" hover:text-red-300 md:block lg:inline-block text-lg text-white p-3 font-semibold">My Orders</li>
                                    </Link>
                                    <Link to="/allOrder">
                                        <li className=" hover:text-red-300 md:block lg:inline-block text-lg text-white p-3 font-semibold">Manage All Orders</li>
                                    </Link>
                                    <Link to="/addNewPackage">
                                        <li className=" hover:text-red-300 md:block lg:inline-block text-lg text-white p-3 font-semibold">Add a New Package</li>
                                    </Link>
                                    <li className=" hover:text-red-300 md:block lg:inline-block text-lg text-white p-3 font-semibold" onClick={logout}>Logout</li>

                                </ul>
                            </div>
                        )
                        :
                        (
                            <div>
                                <ul className="text-center">
                                    <Link to="/login">
                                        <li className=" hover:text-red-300 md:block lg:inline-block text-lg text-white p-3 font-semibold">Login</li>
                                    </Link>
                                </ul>
                            </div>
                        )
                }
            </div>

        </div >
    );
};

export default Header;