import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../actions/actions'

const Search = () => {
    const Dispatch = useDispatch();
    return (
        <>
            <input type="text" className="searchbox mr-4" onChange={(e) => Dispatch(search(e.target.value))} placeholder="Search" />
        </>

    )
}

export default Search;