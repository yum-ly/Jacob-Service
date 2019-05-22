import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchForm from './Components/searchForm.jsx'
import Dropdown from './Components/Dropdown.jsx'


class App extends Component{
    constructor(){
        super()
        this.state = {
            inputIsFocused : {opacity: 1}
        }
        this.onFocusHandler = this.onFocusHandler.bind(this);
    }

    componentDidMount(){
        // axios.get('/api/dbOnConnect')
        // .then((confirm)=>{console.log(confirm.data)})
        // .catch((err)=>{console.log('error seeding database', err)})
    }

    onFocusHandler(e){
        e.type ==='focus' ? this.setState({inputIsFocused : {opacity: 0.5, 'background-color': "black"}}) : this.setState({inputIsFocused : {opacity: 1}});
        console.log(e.type==='focus');
    }

    render(){
    return(
    <>
        <div id= 'search-focus-opacity'  style={this.state.inputIsFocused}>
        </div>
        <div id = 'searchbar'>
            <div id='logo'>YUMI.LY</div>
                <SearchForm onFocusHandler={this.onFocusHandler}/>
            <div id = 'searchbar-left-elements'>
                <a>The Latest</a>
                <a>City's Best</a>
                <a>Dropdown</a>
            </div>
        </div>
        <div>
            <Dropdown />
        </div>
    </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));