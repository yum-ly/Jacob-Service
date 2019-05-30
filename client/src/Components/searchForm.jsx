import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)


const SearchForm = (props) => {
    return(
    <>  
        <FontAwesomeIcon icon={faSearch} size="lg"/> 
        <form action="" id="searchbar">
            <input type="text" onFocus={ props.onFocusHandler } onChange={ props.searchBarInputHandler} placeholder='Find A Great Place Near You'/>
        </form>
    </>
    )
}

export default SearchForm;