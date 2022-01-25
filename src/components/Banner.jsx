import React from 'react';

export const Banner = ({ title, subtitle}) => {
    return (
        <div id="bannerCointainer" className='bg-rick-and-morty position-relative py-5'>
            <div className='w-100'>
                <h1 className="text-white text-center">
                    {title}
                </h1>
                <h2 className="text-white text-center fw-bold">
                    {subtitle}
                </h2>
            </div>
        </div>
    );
};
