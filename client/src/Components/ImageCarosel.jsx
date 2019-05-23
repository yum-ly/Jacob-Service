import React, {Component} from 'react';

class ImageCarosel extends Component{
    constructor(props){
        super(props);
        this.state = {
            trios : []
        }
    }

    componentDidMount(){

        //this.setState({trios : triosCreate()})
    }

    triosCreate(){
        currentTrio = []
        allTrios = []
        props.restaurant.image.map((element, i)=>{
            if(i!==0 && i%3===0){
                allTrios.push(currentTrio.slice());
                currentTrio = [];
            }
            currentTrio.push(element);
        })

        return allTrios
    }

    render(){
        return(
            <div id='carosel-parent'>
                {this.state.trios.map(element=><ImageTrio trio={element}/>)}
            </div>
        )
    }
}

export default ImageCarosel;