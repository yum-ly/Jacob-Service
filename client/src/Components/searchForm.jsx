import React from 'react';

const SearchForm = (props) => {
    return(
    <div>
        <form action="" id="searchbar">
            <input type="text" onFocus={ props.onFocusHandler } onBlur={ props.onFocusHandler } onChange={ props.searchBarInputHandler} placeholder='Search'/>
        </form>
    </div>
    )
}

export default SearchForm;