import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import winter from './jsons/winter.js';
import Groceries from './dumb/Groceries';
import Season from './smart/Season';

class App extends Component {
    render() {
	let season = winter;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Bringing you cheap, healthy meal plans for free.
            </p>
	    <Season season={season}></Season>
	    <Groceries season={season}></Groceries>
        </header>
      </div>
    );
  }
}

export default App;
