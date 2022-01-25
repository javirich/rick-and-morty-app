import React from 'react';
import { CharacterData } from './CharacterData';
import { Link } from 'react-router-dom';
import { FiActivity, FiUser, FiGlobe } from "react-icons/fi";

export const CharacterCard = ({ id, image, name, status, gender, species }) => {

    return (
        <div className="col-10 col-sm-6 col-lg-4 col-xl-3 mb-4">
            <Link to={`/character/${id}`} className='text-decoration-none'>
                <div className="card lift animate__animated animate__fadeIn">
                    <img src={image} alt={name} className='card-avatar' />

                    <div className='card-info'>

                        <h5 className='text-center fw-bold text-white mb-4'> {name} </h5>

                        <div className='card-body bg-white text-primary'>

                            <div className='row'>
                                <div className='col'>
                                    <CharacterData IconData={FiActivity} label={'Status'} data={status} small={true}/> 
                                </div>
                                <div className='col'>
                                    <CharacterData IconData={FiGlobe} label={'Species'} data={species} small={true}/> 
                                </div>
                                <div className='col'>
                                    <CharacterData IconData={FiUser} label={'Gender'} data={gender} small={true}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );

};
