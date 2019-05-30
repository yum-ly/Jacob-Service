import React, {Component} from 'react';
import Axios from 'axios';
import ImageTrio from './ImageTrio.jsx';
import ImageList from './ImageList.jsx';
import ImageCarosel from './ImageCarosel.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes, faChevronLeft, faChevronRight)


class ImageBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            trios : [],
            currentRestaurant : {
                images : []
            },
            focusStyles: {display : 'none'},
            listStyles: {display : 'none'},
            exitButtonStyles: {display : 'none'},
            searchIconStyles: {start: '#656666', finish: '#d0d2d3'},
            caroselStyles : {display : 'none'},
            caroselClickTarget : "test"
        }
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.exitClickHandler = this.exitClickHandler.bind(this);
        this.imageClickHandler = this.imageClickHandler.bind(this);
    }

    componentDidMount(){
        Axios.post('/api', {query : '1' , type: "data retrieve"})
        .then(restaurant=>this.setState({currentRestaurant: restaurant.data[0]}, this._triosCreate))
    }

    componentDidUpdate(prevProps){
        if (this.props.restaurant !== prevProps.restaurant) {
            Axios.post('/api', {query : this.props.restaurant , type: "data retrieve"})
               .then(restaurant=>this.setState({currentRestaurant: restaurant.data[0]}, this._triosCreate))
        }
    }

    buttonClickHandler(){
        console.log('button clicked');
        this.setState({
            focusStyles : { opacity : '0.8' }, 
            listStyles : { display : 'flex',
            'flex-wrap' : 'wrap'},
            exitButtonStyles : {display : 'block'}
        });
    }

    exitClickHandler(){
        this.setState({
            focusStyles: {display : 'none'},
            listStyles: {display : 'none'},
            exitButtonStyles: {display : 'none'},
            caroselStyles: {display : 'none'}
        })
    }

    imageClickHandler(e){
        console.log(e.target.src)
        this.setState({
            focusStyles: {opacity: '0.8'},
            exitButtonStyles: {display: 'block'},
            caroselStyles : {display: 'flex'},
            listStyles: {display: 'none'},
            caroselClickTarget : e.target.src
        })
    }

    _triosCreate(){
        let currentTrio = []
        let allTrios = []
        this.state.currentRestaurant.images.map((element, i)=>{
            if(i!==0 && i%3===0){
                allTrios.push(currentTrio.slice());
                currentTrio = [];
            }
            currentTrio.push(element);
        })

        this.setState({trios: allTrios});
    }

    render(){
        return(
        <>
            <div id='bar-parent'>
                {this.state.trios.map((element, i)=><ImageTrio trio={element} counter={i} key={i} onClick={this.imageClickHandler}/>)}
                
                <div id='see-more-button' onClick={this.buttonClickHandler}>
                    {this.state.currentRestaurant.images.length} photos
                </div>
            </div>

            <div id='image-list' style={this.state.listStyles}>
                <div id='listheader'>
                    {this.state.currentRestaurant.name}
                </div>

                <br/>

                <ImageList images={this.state.currentRestaurant.images} onClick={this.imageClickHandler}/>
            </div>

            <div id='carosel' style={this.state.caroselStyles}>           
                <div id='listheader'>
                    {this.state.currentRestaurant.name}
                </div>

                <br/>

                <ImageCarosel images={this.state.currentRestaurant.images} target={this.state.caroselClickTarget}/>
            </div>

            <div id='image-list-focus' style={this.state.focusStyles} onClick={this.exitClickHandler}>
            </div>

            <div class='button' id='exit-button' style={this.state.exitButtonStyles} onClick={this.exitClickHandler}>
                <FontAwesomeIcon icon={faTimes} size="3x"/> 
            </div>
        </>
        )
    }
}

export default ImageBar;