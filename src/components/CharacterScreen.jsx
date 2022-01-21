import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getCharacterById } from '../helpers/getCharacters';
import { useFetchCharacters } from '../hooks/useFetchCharacters';


export const CharacterScreen = () => {

    const { characterId } = useParams();
    const navigate = useNavigate()

    const { data:character, loading } = useFetchCharacters( getCharacterById, { id: characterId } );

    const handleReturn = () => {
        navigate( -1 );
    }

    if (!character) {
        return <Navigate to='/' />
    }
    
    const {
        id,
        name,
        image,
        status,
    } = character;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ image } 
                    alt={ name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ name }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Status:</b> { status } </li>
                </ul>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Volver
                </button>

            </div>

        </div>
    )
}
