import React from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

export const Pagination = ({ page = '1' , name = '', pagination }) => {

    const navigate = useNavigate();

    const changePage = ( increment ) => {
        const newPage = parseInt(page) + increment;

        const searchQuery = (name !== '')
            ? `?page=${ newPage }&name=${ name }`
            : `?page=${ newPage }`;

        navigate(searchQuery);
    }

    return (
        <div className='container mt-5'>
            <div className='rounded-pill bg-secondary p-3 shadow'>
                <div className='row justify-content-between align-items-center'>

                    <div className='col-auto'>
                        {
                            pagination?.prev
                                ? <button onClick={ () => changePage(-1) } className='btn rounded-pill btn-dark fw-bold'> Prev </button>
                                : <button disabled className='btn rounded-pill btn-dark fw-bold disabled'> Prev </button>
                        }
                    </div>
                    <div className='col-auto px-0'>
                        <p className="text-white mb-0 small fw-bold"> Page {page} of {pagination?.pages}</p>
                    </div>

                    <div className='col-auto'>
                        {
                            pagination?.next
                                ? <button onClick={ () => changePage(+1) } className='btn rounded-pill btn-dark fw-bold'> Next </button>
                                : <button disabled className='btn rounded-pill btn-dark fw-bold disabled'> Next </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    page: propTypes.string.isRequired,
    name: propTypes.string,
    pagination: propTypes.object,
}

