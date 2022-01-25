import propTypes from 'prop-types';
import { useState, useEffect } from 'react';

export const useFetchCharacters= ( fx, params ) => {

    const [state, setState] = useState({
        data: {},
        loadig: true
    });

    useEffect(() => {

        fx( params )
            .then( response => {

                setState({
                    data: response,
                    loading: false
                });

            })

    }, Object.values(params) );

    return state;

};

useFetchCharacters.propTypes = {
    fx: propTypes.func.isRequired,
    params: propTypes.object
}
