import React from 'react';

const SearchForm = (props) => {
    console.log(props)
    return(
    <div>
        <form action="" class="searchbar">
            <input type="text" onFocus={ props.onFocusHandler } onBlur={ props.onFocusHandler } placeholder='Search'/>
        </form>
    </div>
    )
}

export default SearchForm;