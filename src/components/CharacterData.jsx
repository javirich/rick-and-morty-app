import React from 'react';

export const CharacterData = ({IconData, label, data}) => {
    return (

        <div className='row align-items-center justify-content-center'>
            <div className='col-12 text-center'>
                <IconData />
            </div>
            <div className='col-12 mt-n1'>
                <p className="text-center small mb-0">
                    <small>{label}</small>
                </p>
            </div>
            <div className='col-12'>
                <p className="text-center fw-bold mb-0 lh-1">
                    <small>{data}</small>
                </p>
            </div>
        </div>

    );
};
