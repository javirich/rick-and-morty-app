import React, { useState } from 'react';

import { CharacterGrid } from './CharacterGrid';
import { Pagination } from './Pagination';

export const HomeScreen = () => {

    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({});

    return (
        <>
            <CharacterGrid page={page} setPagination={setPagination} />
            <Pagination pagination={pagination} currentPage={page} setPage={setPage} />
        </>
    );
};
