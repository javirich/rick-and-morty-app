import React, {useEffect} from 'react';
import propTypes from 'prop-types';

import { useFetchData } from '../hooks/useFetchCharacters';
import { CharacterCard } from './CharacterCard';

export const CharacterGrid = ({ page = 1, setPagination }) => {

    const { data: characters, pagination, loading } = useFetchData(page);

    useEffect(() => {
        setPagination(pagination);
    }, [pagination]);
    
    return (
        <div className="container py-5">

            {loading && <p className='animate__animated animate__flash'>Loading</p>}

            <div className='row justify-content-center'>
                {
                    characters.map(character => (
                        <CharacterCard
                            key={character.id}
                            {...character}
                        />
                    ))
                }
            </div>

            <div className='spacer-y'></div>

        </div>

    );
};

CharacterGrid.propTypes = {
    page: propTypes.number,
    setPagination: propTypes.func.isRequired
}
