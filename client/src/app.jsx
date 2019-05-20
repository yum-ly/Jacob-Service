import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('/api/dbOnConnect')
        .then((confirm)=>{console.log(confirm.data)})
        .catch((err)=>{console.log('error seeding database', err)})
    }

    render(){
     return(   
        <div id = 'searchbar'>
            <div id='logo'>YUMI.LY</div>
            <div id='form-parent'><searchForm /></div>
        </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));