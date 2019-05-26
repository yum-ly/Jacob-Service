import React from 'react';

const SearchForm = (props) => {
    return(
    <>
        <form action="" id="searchbar">
            <input type="text" onFocus={ props.onFocusHandler } onChange={ props.searchBarInputHandler} placeholder='Search'/>
        </form>
    </>
    )
}

export default SearchForm;