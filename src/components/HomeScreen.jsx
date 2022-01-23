import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


import { CharacterGrid } from './CharacterGrid';
import { Pagination } from './Pagination';
import { SearchBar } from './SearchBar';

export const HomeScreen = () => {

    const location = useLocation();

    const { page = '1', name = '' } = queryString.parse(location.search);
    const [pagination, setPagination] = useState({});

    return (
        <>
            <div id="bannerCointainer" className='bg-rick-and-morty position-relative'>
                <div className='position-absolute bottom-0 start-50 translate-middle mb-5'>
                    <h1 className="text-white text-center">
                        Rick & Morty
                    </h1>

                    <h2 className="text-white text-center fw-bold">
                        Characters
                    </h2>
                </div>
            </div>

            <div id="overlayContainer" className='pt-3 sticky-top'>
                <SearchBar name={name} />
            </div>

            <div id="mainContainer" className='position-relative py-5'>
                
                <CharacterGrid page={page} name={name} setPagination={setPagination} />
                <Pagination page={page} name={name} pagination={pagination} />
                
            </div>

        </>
    );
};
