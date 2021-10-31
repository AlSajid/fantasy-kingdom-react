import React from 'react';
import spinner from './Spinner.gif'

const Spinner = () => {
    return (
        <div className="w-full my-3 p-3 text-center">
            <div className="">
                <img className="mx-auto my-3" src={spinner} alt="spinner" />
                <p className="text-3xl font-bold">Loading...</p>

            </div>

        </div>
    );
};

export default Spinner;