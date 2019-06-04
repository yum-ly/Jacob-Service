import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchForm from './Components/searchForm.jsx'
import ImageBar from './Components/ImageCarosel/ImageBar.jsx'
import Dropdown from './Components/Dropdown.jsx'

// const App = ()=>{
//     const [formInput, useFormInput] = useState("");
//     const [searchFocus, useSearchFocus] = useState({opacity: 1, display : 'none'});
//     const [dropdownIsVisible, useDropdownIsVisible] = useState({display: 'none'});
//     const [searchResults, useSearchResults] = useState([]);
//     const [currentRestaurant, useCurrentRestaurant] = useState({uuid: 1});


//     const selectCurrentRestaurant = (e, restaurant)=>{
//         useCurrentRestaurant(restaurant)
//     }

//     const onFocusHandler = (e)=>{
//         if(e.type==='focus'){
//                 useSearchFocus({opacity: 0.5, 'background-color': "black"});
//                 useDropdownIsVisible({display: 'flex'});
//         }else{
//                 useSearchFocus({display: 'none'})
//                 useDropdownIsVisible({display: 'none'})
//         }
//     }

//     const searchBarInputHandler = (e)=>{
//         useFormInput(e.target.value)
//     }

//     useEffect(()=>{
//         axios.post('/api', {query : formInput, type: "form input"})
//         .then((response)=>{useSearchResults(response.data)})
//         .catch(()=>{console.log('there was an error posting the query')});
//     },[formInput])

//     return(
//             <>
//                 <div id= 'search-focus-opacity'  onClick={onFocusHandler} style={searchFocus}>
//                 </div>
//                 <Dropdown dropdownIsVisible={dropdownIsVisible} searchResults={searchResults} selectCurrentRestaurant={selectCurrentRestaurant}/>
//                 <div id = 'topbar'>
//                     <div id='searchbar-left-elements'>
//                         <div id='logo-link'><img src='placeholderLogo.png'/></div>
//                         <SearchForm onFocusHandler={onFocusHandler} searchBarInputHandler={searchBarInputHandler}/>
//                     </div>
//                     <div id ='searchbar-right-elements'>
//                         <a id='dropdown-link'>Dropdown </a>                 
//                         <a id='citybest'>City's Best </a> 
//                         <a id='latest'>The Latest </a> 
//                     </div>
//                 </div>
//                 <br/>
//                 <ImageBar restaurant={currentRestaurant.uuid}/>
//             </>
//                 )

// }

class App extends Component{
    constructor(){
        super()
        this.state = {
            formInput: '',
            searchFocus : {opacity: 1, display: 'none'},
            dropdownIsVisible: {display: 'none'},
            searchResults: [],
            currentRestaurant: '1'
        }
        this.onFocusHandler = this.onFocusHandler.bind(this);
        this.searchBarInputHandler = this.searchBarInputHandler.bind(this);
        this.selectCurrentRestaurant = this.selectCurrentRestaurant.bind(this);
    }

    componentDidUpdate(prevProps){
        if (this.props.uuid !== prevProps.uuid) {
            console.log('test', this.props.uuid)
            axios.post('http://YumlyMicroservice-env-2.ynkqtbpzvp.us-east-2.elasticbeanstalk.com/api', {query : this.props.uuid , type: "data retrieve"})
               .then((restaurant)=>{console.log(restaurant), this.setState({currentRestaurant: restaurant.data[0].uuid}, ()=>{console.log(this.state.currentRestaurant, "current restaurant")})})
               .catch((err)=>{console.log(err, "ya borked it!")})
        }
    }

    componentDidMount(){
        // axios.get('/api/dbOnConnect')
        // .then((confirm)=>{console.log(confirm.data)})
        // .catch((err)=>{console.log('error seeding database', err)})
    }

    selectCurrentRestaurant(e, restaurant){
        this.setState({currentRestaurant : restaurant.toString()}, ()=>{this.props.uuidUpdateHandler(null, this.state.currentRestaurant)});
    }

    onFocusHandler(e){
        console.log(e.target)
        if(e.target.id==='searchbar'){
            this.setState({
                searchFocus : {opacity: 0.5, 'background-color': "black"},
                dropdownIsVisible : {display: 'flex'}
            })
            document.body.style.overflow = "hidden";
        }else{
            this.setState({
                searchFocus : {display: 'none'},
                dropdownIsVisible: {display: 'none'}
            })
            document.body.style.overflow = "visible";
        }
    }

    searchBarInputHandler(e){
        this.setState({formInput: e.target.value}, ()=>{
            axios.post('http://YumlyMicroservice-env-2.ynkqtbpzvp.us-east-2.elasticbeanstalk.com/api', {query : this.state.formInput, type: "form input"})
            .then((response)=>{this.setState({searchResults: response.data})})
            .catch(()=>{console.log('there was an error posting the query')});
        })

    }

    render(){
    return(
    <>
        <div id= 'search-focus-opacity'  onClick={this.onFocusHandler} style={this.state.searchFocus}>
        </div>
        <Dropdown dropdownIsVisible={this.state.dropdownIsVisible} searchResults={this.state.searchResults} searchBarInputHandler={this.searchBarInputHandler} formInput={this.state.formInput} selectCurrentRestaurant={this.selectCurrentRestaurant}/>
        <div id = 'topbar'>
            <div id='searchbar-left-elements'>
                <div id='logo-link'><img src='https://files.slack.com/files-pri/T2SVC7RB3-FJWDV726N/yumlylogo.png'/></div>
                <SearchForm onFocusHandler={this.onFocusHandler}  />
            </div>
            <div id ='searchbar-right-elements'>
                <a id='dropdown-link'>Dropdown </a>                 
                <a id='citybest'>City's Best </a> 
                <a id='latest'>The Latest </a> 
            </div>
        </div>
        <br/>
        <ImageBar restaurant={this.state.currentRestaurant}/>
    </>
        )
    }
}


window.SearchBar = App;
// ReactDOM.render(<App/>, document.getElementById('root'));