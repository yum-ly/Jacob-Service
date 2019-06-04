import React from 'react';
import DropdownElement from './DropdownElement.jsx'

const Dropdown = (props) => {
    return(
        <>
    <div id='dropdown' style={ props.dropdownIsVisible }>
        <div className='dropdown-element' >
            <div className='dropdown-top' > 
            <input type="text" id='searchbar-input' onChange={ props.searchBarInputHandler} placeholder='Find A Great Place'/>
            </div>
            {props.searchResults ? props.searchResults.map(element=><DropdownElement selectCurrentRestaurant={props.selectCurrentRestaurant} restaurant={element} />) : null}
        </div>
        <div className='dropdown-element'>
            <div className='dropdown-top' id='location-form'>
            </div>
        </div>
    </div>
        </>

    )
}

export default Dropdown;