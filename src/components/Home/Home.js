import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className="text-center">
            <Banner></Banner>
            <Services></Services>

            {/* Extra Section - 1 */}
            <div className="m-3 p-3 container mx-auto">
                <h2 className="font-bold text-3xl m-3 p-3">Explore Our Parks</h2>
                <hr />
                <div className="grid lg:grid-cols-3 sm:grid-cols-1">
                    <div className="overflow-hidden m-3">
                        <img src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740502.jpeg" alt="Fantasy Kingdom" className="rounded-3xl mx-auto" />
                        <p className="text-gray-900 text-3xl m-3 font-semibold">Water Kingdom</p>
                    </div>
                    <div className="overflow-hidden m-3">
                        <img src="https://fantasykingdom.net/wp-content/uploads/2021/08/FKC.jpg" alt="Fantasy Kingdom" className="rounded-3xl mx-auto" />
                        <p className="text-gray-900 text-3xl m-3 font-semibold">Fantasy Kingdom</p>
                    </div>
                    <div className="overflow-hidden m-3">
                        <img src="https://fantasykingdom.net/wp-content/uploads/2021/08/1585740583.jpeg" alt="Fantasy Kingdom" className="rounded-3xl mx-auto" />
                        <p className="text-gray-900 text-3xl m-3 font-semibold">Xtreame Racing</p>
                    </div>
                </div>
            </div>

            {/* Extra Section - 2 */}
            <div className="m-3 p-3 container mx-auto">
                <h2 className="font-bold text-3xl m-3 p-3">Things To Do</h2>
                <hr />
                <div className="grid lg:grid-cols-3 sm:grid-cols-1">
                    <div className="overflow-hidden m-3">
                        <img src="https://fantasykingdom.net/wp-content/uploads/2021/08/H20.jpg" alt="Birthday Party" className="rounded-3xl mx-auto" />
                        <p className="text-gray-900 text-3xl m-3 font-semibold">Birthday Party</p>
                    </div>
                    <div className="overflow-hidden m-3">
                        <img src="https://fantasykingdom.net/wp-content/uploads/2021/08/H19.jpg" alt="BBQ Patry" className="rounded-3xl mx-auto" />
                        <p className="text-gray-900 text-3xl m-3 font-semibold">BBQ Patry</p>
                    </div>
                    <div className="overflow-hidden m-3">
                        <img src="https://fantasykingdom.net/wp-content/uploads/2021/08/H10.jpg" alt="Group Picnic" className="rounded-3xl mx-auto" />
                        <p className="text-gray-900 text-3xl m-3 font-semibold">Group Picnic</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;