import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export const SearchBar = ({ name }) => {

    const navigate = useNavigate();

    const [formValues, handleInputChange] = useForm({
        searchText: name,
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?name=${searchText}`)
    }

    return (

        <div className="container">
            <div className='rounded-pill bg-secondary p-3 shadow'>

                <form onSubmit={handleSearch}>

                    <div className='row'>

                        <div className='col'>
                            <input
                                type="text"
                                placeholder="Search a character"
                                className="form-control rounded-pill border-0"
                                name="searchText"
                                autoComplete="off"
                                value={searchText}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='col-auto'>
                            <button
                                className="btn btn-light"
                                type="submit">
                                Buscar...
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};
