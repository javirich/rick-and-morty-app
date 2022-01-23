import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { FiSearch } from 'react-icons/fi';

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
            <div className='rounded-pill bg-primary p-3 shadow'>

                <form onSubmit={handleSearch}>

                    <div className='row'>

                        <div className='col'>
                            <input
                                type="text"
                                placeholder="Search for a character"
                                className="form-control form-control-sm rounded-pill border-0 px-3"
                                name="searchText"
                                autoComplete="off"
                                value={searchText}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='col-auto'>
                            <button
                                className="btn rounded-pill btn-dark d-flex align-items-center h-100"
                                type="submit">
                                    <FiSearch />
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};
