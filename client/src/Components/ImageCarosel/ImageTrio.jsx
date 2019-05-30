import React from 'react';

const ImageTrio = (props)=>(
    <div id={'trio' + props.counter} class='trio'>
    <img class='big-image' src={props.trio[0]} onClick={props.onClick}></img>
    <img class='little-top' src={props.trio[1]} onClick={props.onClick}></img>
    <img class='little-bottom' src={props.trio[2]} onClick={props.onClick}></img>
    </div>
)

export default ImageTrio;