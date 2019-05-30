import React from 'react';

const ImageList = (props)=>{
    return(
        <>
        {props.images.map((image)=>( <img src={image} onClick={props.onClick}></img>))}
        </>
    )
}

export default ImageList;