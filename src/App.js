import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css';
import 'tachyons'
import { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state = {
      robots: [],
      search: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(robots => this.setState({robots}))
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.search.toLowerCase()))
    if(this.state.robots.length === 0){
      return <h1 className = "loading">Loading!!</h1>
    } else{
      return (
        <div className="App tc">
          <h1 className = 'f1'>Robo Friends</h1>
          <SearchBox onChange = {this.onSearchChange} search = {this.state.search}/>
          <Scroll>
            <CardList robots = {filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
