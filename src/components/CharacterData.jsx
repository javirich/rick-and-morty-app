import React from 'react';

export const CharacterData = ({ IconData, label, data, small = false }) => {
    return (
        <>
            {small ?
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
                :
                <div className='px-2 py-3 h-100'>
                    <div className='bg-white p-3 py-md-4 px-md-3 rounded h-100 text-primary'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-12 text-center'>
                                <IconData />
                            </div>
                            <div className='col-12'>
                                <p className="text-center">
                                    {label}
                                </p>
                            </div>
                            <div className='col-12'>
                                <h5 className="text-center fw-bold mb-0">
                                    {(data == "") ? "-": data}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
