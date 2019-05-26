import React from 'react';

const ImageTrio = (props)=>(
    <div id={'trio' + props.counter} class='trio'>
    <img class='big-image' src={props.trio[0]} ></img>
    <img class='little-top' src={props.trio[1]}></img>
    <img class='little-bottom' src={props.trio[2]}></img>
    </div>
)

export default ImageTrio;