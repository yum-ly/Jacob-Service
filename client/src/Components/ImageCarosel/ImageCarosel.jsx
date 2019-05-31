import React, {useState, useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight)

const ImageCarosel = (props)=>{
    const [images, useImages] = useState(props.images);
    const [target, useTarget] = useState(props.target);
    const [position, usePosition] = useState(props.images.indexOf(props.target));

    useEffect(()=>{
        useImages(props.images)
        useTarget(props.target)
        usePosition(props.images.indexOf(props.target));
        usePosition(props.images.indexOf(props.target));
    }, [props]);
    
    const leftClickHandler = ()=>{
        if(position===0){
            useTarget(images[images.length-1]);
            usePosition(images.length-1);
        }else{
            useTarget(images[position-1]);
            usePosition(images.length-1);
        }
    }

    const rightClickHandler = ()=>{
        if(position===images.length-1){
            useTarget(images[0]);
            usePosition(0);
        }else{
            useTarget(images[position+1]);
            usePosition(position+1);
        }
    }

    return(
        <>
        <img src={target} />

        <div class='button' id='left-button' onClick={leftClickHandler}>
                <FontAwesomeIcon icon={faChevronLeft} size="2x"/> 
            </div>

            <div class='button' id='right-button' onClick={rightClickHandler}>
                <FontAwesomeIcon icon={faChevronRight} size="2x"/> 
            </div>
        </>
    )
}

// class ImageCarosel extends Component {
//     constructor(props){
//         super(props)

//         this.state ={
//             images : this.props.images,
//             target : this.props.target,
//             position: -1,
//             imageStyles: {}
//         }
//         this.leftClickHandler = this.leftClickHandler.bind(this);
//         this.rightClickHandler = this.rightClickHandler.bind(this)
//     }

//     componentDidUpdate(prevProps){  
//         if (this.props !== prevProps) {
//             this.setState({images: this.props.images, target: this.props.target, position: this.props.images.indexOf(this.props.target)});
//         }
//     }

//     leftClickHandler(){
//         if(this.state.position===0){
//             this.setState({target: this.state.images[this.state.images.length-1], position: this.state.images.length-1})
//         }else{
//         this.setState({target: this.state.images[this.state.position-1], position : this.state.position-1})
//         }
//     }

//     rightClickHandler(){
//         if(this.state.position===this.state.images.length-1){
//             this.setState({target: this.state.images[0], position: 0})
//         }else{
//         this.setState({target: this.state.images[this.state.position+1], position : this.state.position+1})
//         }
//     }

//     render(){
//         return(
//         <>
//         <img src={this.state.target} />

//         <div class='button' id='left-button' style={this.state.caroselStyles} onClick={this.leftClickHandler}>
//                 <FontAwesomeIcon icon={faChevronLeft} size="2x"/> 
//             </div>

//             <div class='button' id='right-button' style={this.state.caroselStyles} onClick={this.rightClickHandler}>
//                 <FontAwesomeIcon icon={faChevronRight} size="2x"/> 
//             </div>
//         </>
//         )
//     }
// }

export default ImageCarosel;