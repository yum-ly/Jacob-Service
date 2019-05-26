import React from 'react';
import DropdownElement from './DropdownElement.jsx'

const Dropdown = (props) => {
    return(
    <div id='dropdown' style={props.dropdownIsVisible}>
        <div class='dropdown-element'>
        <div class='dropdown-top'></div>
        {props.searchResults ? props.searchResults.map(element=><DropdownElement selectCurrentRestaurant={props.selectCurrentRestaurant} restaurant={element} />) : null}
        </div>
        <div class='dropdown-element'>
        <div class='dropdown-top' id='location-form'></div>
        </div>
    </div>
    )
}

export default Dropdown;