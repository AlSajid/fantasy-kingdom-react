import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white ">
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-9 container m-auto text-left">
                <div className="p-3 m-3">
                    <h2 className="font-semibold">CONTACT US</h2>
                    <p className="m-3">If you have any questions, please contact us at info@fantasykingdom.net</p>
                    <p className="m-3">09612-002020</p>
                </div>
                <div className="p-3 m-3">
                    <h2 className="font-semibold">OUR ADDRESS</h2>
                    <p className="m-3">Fantasy Kingdom Complex, Jamgora, Ashulia, Savar, Dhaka, Bangladesh</p>

                    <p className="m-3">Saturday -Thursday: 11 AM – 07 PM <br />
                        Friday & Holiday: 10 AM – 08 PM</p>
                </div>
                <div className="p-3 m-3">
                    <h2 className="font-semibold">PROUD MEMBER OF</h2>
                    <div className="grid grid-cols-2 w-1/2 m-3">
                        <div>
                            <img src="https://fantasykingdom.net/wp-content/uploads/2021/08/iaapa1.png" alt="icon" />
                        </div>
                        <div>
                            <img src="https://fantasykingdom.net/wp-content/uploads/2021/08/baapa.png" alt="icon" />
                        </div>
                    </div>
                    <div className="border border-gray-300 my-3 rounded-3xl">
                        <input className="bg-gray-800 p-3 border-0 w-2/3 rounded-3xl" placeholder="Your Email..." />
                        <button className="bg-red-600 p-3 w-1/3 font-semibold rounded-3xl">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-300 p-3 font-semibold container">
                <hr className="m-auto" />
                <h3 className="m-3 p-3">Copyright © Fantasy Kingdom Complex</h3>
            </div>
        </div>
    );
};

export default Footer;