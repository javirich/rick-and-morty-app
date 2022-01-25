import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getCharacterById } from '../helpers/getCharacters';
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { Banner } from './Banner';
import { CharacterData } from './CharacterData';
import { FiInfo, FiActivity, FiUser, FiGlobe, FiHelpCircle, FiMap, FiFlag, FiLayers, FiClock } from "react-icons/fi";


export const CharacterScreen = () => {

    const { characterId } = useParams();
    const navigate = useNavigate()

    const { data: character, loading = true } = useFetchCharacters(getCharacterById, { id: characterId });

    const handleReturn = () => {
        navigate(-1);
    }

    if (!character) {
        return <Navigate to='/' />
    }

    const {
        image,
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
        episode,
        created
    } = character;

    return (
        <>
            {loading ? <Banner title={''} subtitle={''} /> : <Banner title={name} subtitle={'Character details'} />}

            <div id="mainContainer" className='bg-dark'>

                <div className='container'>

                    {loading ? <></> :
                        <div className="row">
                            <div className="col-12 mt-4 mt-md-0 mb-3">
                                <img
                                    src={image}
                                    alt={name}
                                    className="d-block mx-auto img-thumbnail animate__animated animate__fadeIn"
                                />
                            </div>

                            <div className="col-12">

                                <div className='card my-0 mx-2 m-md-4'>
                                    <div className='card-body py-0 px-2 p-md-4'>
                                        <div className='row g-0 g-md-2'>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiInfo} label={'Name'} data={name} />
                                            </div>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiActivity} label={'Status'} data={status} />
                                            </div>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiGlobe} label={'Species'} data={species} />
                                            </div>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiHelpCircle} label={'Type'} data={type} />
                                            </div>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiUser} label={'Gender'} data={gender} />
                                            </div>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiFlag} label={'Origin'} data={origin.name} />
                                            </div>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiMap} label={'Location'} data={location.name} />
                                            </div>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiLayers} label={'Episodes'} data={episode.length} />
                                            </div>
                                            <div className='col-6 col-md-4'>
                                                <CharacterData IconData={FiClock} label={'Created'} data={created} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    }
                    <button
                        className="btn rounded-pill btn-light m-4"
                        onClick={handleReturn}
                    >
                        Back
                    </button>
                </div>
            </div>
        </>
    )
}



// return (
//     <>
//         {loading ? <Banner title={'Loading'} subtitle={'...'} /> : <Banner title={name} subtitle={'Character'} />}


//         <div id="mainContainer" className='position-relative py-5'>

//             <div className='container'>

//                 {!loading &&
//                     <div className="row mt-5">
//                         <div className="col-4">
//                             <img
//                                 src={character?.image}
//                                 alt={character?.name}
//                                 className="img-thumbnail animate__animated animate__fadeInLeft"
//                             />
//                         </div>

//                         <div className="col-8 animate__animated animate__fadeIn">
//                             <h3>{character?.name}</h3>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item"> <b>Name:</b> {character?.name} </li>
//                                 <li className="list-group-item"> <b>Status:</b> {character?.status} </li>
//                                 <li className="list-group-item"> <b>Species:</b> {character?.species} </li>
//                                 <li className="list-group-item"> <b>Type:</b> {character?.type} </li>
//                                 <li className="list-group-item"> <b>Gender:</b> {character?.gender} </li>
//                                 <li className="list-group-item"> <b>Origin:</b> {character?.origin} </li>
//                                 <li className="list-group-item"> <b>Location:</b> {character?.location} </li>
//                                 <li className="list-group-item"> <b>Episodes:</b> {character?.episode?.length} </li>
//                                 <li className="list-group-item"> <b>Created:</b> {character?.created} </li>
//                             </ul>

//                             <button
//                                 className="btn rounded-pill btn-light"
//                                 onClick={handleReturn}
//                             >
//                                 Back
//                             </button>

//                         </div>

//                     </div>
//                 }
//             </div>
//         </div>
//     </>
// )


