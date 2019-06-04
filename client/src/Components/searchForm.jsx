import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)


const SearchForm = (props) => {
    return(
    <div id='searchform-parent'>  
        <FontAwesomeIcon icon={faSearch} size="lg"/> 
            <div id='searchbar' onClick={props.onFocusHandler}>Find A Great Place Near You</div>
    </div>
    )
}

export default SearchForm;