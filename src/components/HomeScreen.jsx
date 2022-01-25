import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { CharacterGrid } from './CharacterGrid';
import { Pagination } from './Pagination';
import { SearchBar } from './SearchBar';
import { Banner } from './Banner';

export const HomeScreen = () => {

    const location = useLocation();

    const { page = '1', name = '' } = queryString.parse(location.search);
    const [pagination, setPagination] = useState({});

    return (
        <>
            <Banner title={'Rick & Morty'} subtitle={'Characters'} />

            <div id="overlayContainer" className='pt-3 sticky-top'>
                <SearchBar name={name} />
            </div>

            <div id="mainContainer" className='position-relative py-5 bg-dark'>

                <CharacterGrid page={page} name={name} setPagination={setPagination} />

                {pagination === null && <div className='container text-white text-center'><h5>No results</h5></div> }

                {pagination !== null && pagination?.pages > 1 &&
                    <Pagination page={page} name={name} pagination={pagination} />
                }

            </div>

        </>
    );
};
