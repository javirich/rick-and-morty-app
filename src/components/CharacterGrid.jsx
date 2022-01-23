import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { getAllCharacters } from '../helpers/getCharacters';
import { CharacterCard } from './CharacterCard';

export const CharacterGrid = ({ page = '1', name = '', setPagination }) => {

    const { data: { characters, pagination }, loading } = useFetchCharacters(getAllCharacters, { page: page, name: name });

    useEffect(() => {
        setPagination(pagination);
    }, [pagination, setPagination]);

    return (
        <div className="container pt-5">

            {loading && <p className='animate__animated animate__flash'>Loading</p>}

            <div className='row justify-content-center'>
                {
                    characters?.map(character => (
                        <CharacterCard
                            key={character.id}
                            {...character}
                        />
                    ))
                }
            </div>



        </div>

    );
};

CharacterGrid.propTypes = {
    page: propTypes.string,
    name: propTypes.string,
    setPagination: propTypes.func.isRequired
}
