import React from 'react';

const DropdownElement = (props)=>{
    return(
        <div>
            <a onClick={(e)=>{props.selectCurrentRestaurant(e, props.restaurant.uuid)}} >{props.restaurant.name}</a>
        </div>
    )
}

export default DropdownElement;