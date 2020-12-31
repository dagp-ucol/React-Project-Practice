import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frank',
          id: 'a01'
        },
        {
          name: 'Dracula',
          id: 'a02'
        },
        {
          name: 'Zombie',
          id: 'a01'
        }
      ]
    }
  }



  render () {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => 
          <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
