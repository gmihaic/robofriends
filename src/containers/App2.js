import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'

class App2 extends Component {

    constructor() {

        super();

        this.state = {
            robots: [],          
            searchfield: ''
        };        
    }

    componentDidMount() {             
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                this.setState({robots: users})
            });               
    }

    onSearchChange = (event) => {             

        this.setState({
            searchfield: event.target.value            
        });
        
    }

    filteredRobots = () => {                         
       
        const {robots, searchfield} = this.state;

        const robotsFiltered = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        
        return robotsFiltered;
    }

    render() {
        
        if (!this.state.robots.length) {
            return <h1>Loading...</h1>
        };

        return (
            <>                
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <br/>    
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filteredRobots()} />
                        </ErrorBoundary>                              
                    </Scroll>               
                                 
                </div>
            </>
        );
    }
}

export default App2;