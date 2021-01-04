import { React, Component } from 'react';
import logo from './logo.svg';
import { Cardlist } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount () {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }

  render () {
    return (
      <div className="App">
      <input 
        type='search' 
        id = "myInput"
        placeholder='Search user 🔎'
        onChange={e => {this.setState({ searchField: e.target.value}, () => console.log(this.state))
        }}
        />
        
      <Cardlist monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
