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
            <div className='spacer-y'></div>
            <SearchBar name={name} />
            <CharacterGrid page={page} name={name} setPagination={setPagination} />
            <Pagination page={page} name={name} pagination={pagination} />
        </>
    );
};
