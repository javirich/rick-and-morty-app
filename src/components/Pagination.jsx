import React from 'react';
import propTypes from 'prop-types';

export const Pagination = ({ pagination, currentPage, setPage }) => {

    const decreasePage = () => setPage(page => page - 1);
    const increasePage = () => setPage(page => page + 1);

    return (
        <div className='container fixed-bottom'>
            <div className='rounded-pill bg-primary p-3 m-5 shadow'>
                <div className='row justify-content-between align-items-center'>

                    <div className='col-auto'>
                        {
                            pagination.prev
                                ? <button onClick={decreasePage} className='btn rounded-pill btn-light'> Prev </button>
                                : <button disabled className='btn rounded-pill btn-light disabled'> Prev </button>
                        }
                    </div>
                    <div className='col-auto'>
                        <p className="text-white mb-0 small fw-bold"> Page {currentPage} of {pagination.pages}</p>
                    </div>

                    <div className='col-auto'>
                        {
                            pagination.next
                                ? <button onClick={increasePage} className='btn rounded-pill btn-light'> Next </button>
                                : <button disabled className='btn rounded-pill btn-light disabled'> Next </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    pagination: propTypes.object,
    currentPage: propTypes.number.isRequired,
    setPage: propTypes.func.isRequired
}

