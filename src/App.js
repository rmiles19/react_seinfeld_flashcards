import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Seinfeld Quotes</h1>
        </header>
        <h1 className="App-intro">
          Read the quote. Who said it and what season?
        </h1>
        <div>
          <h5>"These pretzels are making me thirsty."</h5>
          <button onClick >Tell Me!</button>
          <button onClick >Hide Answer</button>
        </div>
      </div>
    );
  }
}

export default App;
