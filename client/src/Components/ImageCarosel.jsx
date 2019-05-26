import React, {Component} from 'react';
import Axios from 'axios';
import ImageTrio from './ImageTrio.jsx'

class ImageCarosel extends Component{
    constructor(props){
        super(props);
        this.state = {
            trios : [],
            currentRestaurant : {}
        }
    }

    componentDidMount(){
        Axios.post('/api', {query : '1' , type: "data retrieve"})
        .then((restaurant)=>{this.setState({currentRestaurant: restaurant.data[0]}, this.triosCreate)})
    }

    componentDidUpdate(prevProps){
        if (this.props.restaurant !== prevProps.restaurant) {
            Axios.post('/api', {query : this.props.restaurant , type: "data retrieve"})
               .then((restaurant)=>{this.setState({currentRestaurant: restaurant.data[0]}, this.triosCreate)})
        }
    }

    triosCreate(){
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
            <div id='carosel-parent'>
                {this.state.trios.map((element, i)=><ImageTrio trio={element} counter={i} key={i}/>,console.log('test'))}
                <div id='see-more-button'></div>
            </div>
        )
    }
}

export default ImageCarosel;