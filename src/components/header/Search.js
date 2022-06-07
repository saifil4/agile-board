import React from 'react';
import { search } from '../../actions/actions'

const Search = ({ setSearchValue }) => {
    return (
        <>
            <input type="text" className="searchbox mr-4" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" />
        </>

    )
}

export default Search;