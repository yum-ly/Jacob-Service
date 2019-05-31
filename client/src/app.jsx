import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchForm from './Components/searchForm.jsx'
import ImageBar from './Components/ImageCarosel/ImageBar.jsx'
import Dropdown from './Components/Dropdown.jsx'

const App = ()=>{
    const [formInput, useFormInput] = useState("");
    const [searchFocus, useSearchFocus] = useState({opacity: 1, display : 'none'});
    const [dropdownIsVisible, useDropdownIsVisible] = useState({display: 'none'});
    const [searchResults, useSearchResults] = useState([]);
    const [currentRestaurant, useCurrentRestaurant] = useState(1);


    const selectCurrentRestaurant = (e, restaurant)=>{
        useCurrentRestaurant(restaurant)
    }

    const onFocusHandler(e)=>{
        if(e.type==='focus'){
                useSearchFocus({opacity: 0.5, 'background-color': "black"});
                useDropdownIsVisible({display: 'flex'});
        }else{
            this.setState({
                searchFocus : {display: 'none'},
                dropdownIsVisible: {display: 'none'}
            })
        }
    }

    searchBarInputHandler(e){
        this.setState({formInput: e.target.value}, ()=>{
            axios.post('/api', {query : this.state.formInput, type: "form input"})
            .then((response)=>{this.setState({searchResults: response.data})})
            .catch(()=>{console.log('there was an error posting the query')});
        })

    }

}

// class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             formInput: '',
//             searchFocus : {opacity: 1, display: 'none'},
//             dropdownIsVisible: {display: 'none'},
//             searchResults: [],
//             currentRestaurant: 1
//         }
//         this.onFocusHandler = this.onFocusHandler.bind(this);
//         this.searchBarInputHandler = this.searchBarInputHandler.bind(this);
//         this.selectCurrentRestaurant = this.selectCurrentRestaurant.bind(this);
//     }

//     componentDidMount(){
//         // axios.get('/api/dbOnConnect')
//         // .then((confirm)=>{console.log(confirm.data)})
//         // .catch((err)=>{console.log('error seeding database', err)})
//     }

//     selectCurrentRestaurant(e, restaurant){
//         this.setState({currentRestaurant : restaurant})
//     }

//     onFocusHandler(e){
//         if(e.type==='focus'){
//             this.setState({
//                 searchFocus : {opacity: 0.5, 'background-color': "black"},
//                 dropdownIsVisible : {display: 'flex'}
//             })
//         }else{
//             this.setState({
//                 searchFocus : {display: 'none'},
//                 dropdownIsVisible: {display: 'none'}
//             })
//         }
//     }

//     searchBarInputHandler(e){
//         this.setState({formInput: e.target.value}, ()=>{
//             axios.post('/api', {query : this.state.formInput, type: "form input"})
//             .then((response)=>{this.setState({searchResults: response.data})})
//             .catch(()=>{console.log('there was an error posting the query')});
//         })

//     }

//     render(){
//     return(
//     <>
//         <div id= 'search-focus-opacity'  onClick={this.onFocusHandler} style={this.state.searchFocus}>
//         </div>
//         <Dropdown dropdownIsVisible={this.state.dropdownIsVisible} searchResults={this.state.searchResults} selectCurrentRestaurant={this.selectCurrentRestaurant}/>
//         <div id = 'topbar'>
//             <div id='searchbar-left-elements'>
//                 <div id='logo-link'><img src='placeholderLogo.png'/></div>
//                 <SearchForm onFocusHandler={this.onFocusHandler} searchBarInputHandler={this.searchBarInputHandler}/>
//             </div>
//             <div id ='searchbar-right-elements'>
//                 <a id='dropdown-link'>Dropdown </a>                 
//                 <a id='citybest'>City's Best </a> 
//                 <a id='latest'>The Latest </a> 
//             </div>
//         </div>
//         <br/>
//         <ImageBar restaurant={this.state.currentRestaurant}/>
//     </>
//         )
//     }
// }

ReactDOM.render(<App/>, document.getElementById('root'));