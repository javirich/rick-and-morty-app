import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { getAllCharacters } from '../helpers/getCharacters';
import { CharacterCard } from './CharacterCard';

export const CharacterGrid = ({ page = '1', name = '', setPagination }) => {

    const { data: { characters, pagination }, loading = true } = useFetchCharacters(getAllCharacters, { page: page, name: name });

    useEffect(() => {
        setPagination(pagination);
    }, [pagination, setPagination]);

    return (
        <div className="container pt-2 pt-md-5">

            {loading && <div className='container text-white animate__animated animate__flash text-center'><h5>Loading</h5></div>}

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
