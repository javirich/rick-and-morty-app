import { useState, useEffect } from 'react'
import { getAllCharacters } from '../helpers/getCharacters';

export const useFetchData= ( page ) => {

    const [state, setState] = useState({
        data: [],
        pagination: {},
        loadig: true
    });

    useEffect(() => {

        getAllCharacters( page )
            .then( response => {

                setState({
                    data: response.characters,
                    pagination: response.pagination,
                    loading: false
                });

            })

    }, [ page ]);

    return state;

};
