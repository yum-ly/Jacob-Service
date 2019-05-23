import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchForm from './Components/searchForm.jsx'
import ImageCarosel from './Components/ImageCarosel.jsx'
import Dropdown from './Components/Dropdown.jsx'

class App extends Component{
    constructor(){
        super()
        this.state = {
            formInput: '',
            searchFocus : {opacity: 1},
            dropdownIsVisible: {display: 'none'},
            searchResults: []
        }
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.searchBarInputHandler = this.searchBarInputHandler.bind(this);
    }

    componentDidMount(){
        // axios.get('/api/dbOnConnect')
        // .then((confirm)=>{console.log(confirm.data)})
        // .catch((err)=>{console.log('error seeding database', err)})
    }

    onFocusHandler(e){
        if(e.type==='focus'){
            this.setState({
                searchFocus : {opacity: 0.5, 'background-color': "black"},
                dropdownIsVisible : {display: 'flex'}
            })
        }else{
            this.setState({
                searchFocus : {opacity: 1},
                dropdownIsVisible: {display: 'none'}
            })
        }
    }

    searchBarInputHandler(e){
        this.setState({formInput: e.target.value}, ()=>{
            axios.post('/api', {query : this.state.formInput})
            .then((response)=>{this.setState({searchResults: response.data})})
            .catch(()=>{console.log('there was an error posting the query')});
        })

    }

    render(){
    return(
    <>
        <div id= 'search-focus-opacity'  style={this.state.searchFocus}>
        </div>
        <Dropdown dropdownIsVisible={this.state.dropdownIsVisible} searchResults={this.state.searchResults}/>
        <div id = 'topbar'>
            <div id='searchbar-left-elements'>
                <div id='logo-link'><img src='placeholderLogo.png'/></div>
                <SearchForm onFocusHandler={this.onFocusHandler} searchBarInputHandler={this.searchBarInputHandler}/>
            </div>
            <div id = 'searchbar-right-elements'>
                <a>The Latest </a> 
                <a>City's Best </a> 
                <a>Dropdown </a> 
            </div>
        </div>
        <br/>
        <ImageCarosel />
    </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));