import React from 'react';

const DropdownElement = (props)=>{
    return(
        <div>
            <a onClick={props.selectCurrentRestaurant} >{props.restaurant.name}</a>
        </div>
    )
}

export default DropdownElement;