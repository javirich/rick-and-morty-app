import React from 'react';
import { Link } from 'react-router-dom'

export const CharacterCard = ({ id, image, name, status }) => {

    return (
        <div className="col-10 col-sm-6 col-lg-4 col-xl-3 mb-4">
            <Link to={`/character/${id}`} className='text-decoration-none'>
                <div className="card bg-white lift animate__animated animate__fadeIn" type="button">
                    <img src={image} alt={name} className='card-avatar' />
                    <div className='card-info'>
                        <p className="text-center fw-bold text-uppercase text-muted mb-0">
                            <small> {status} </small>
                        </p>
                        <h5 className='text-center fw-bold mb-5 text-dark'> {name} </h5>
                    </div>
                </div>
            </Link>
        </div>
    );

};
