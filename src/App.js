import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashcardForm from './FlashcardForm';

class App extends Component {

  addFlashcard = (quote, character) => {
    const {todos} = this.state;
    const todo = { quote, id: this.getId(), complete: false }
    this.setState({ todos: [todo, ...todos] })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Seinfeld Quotes</h1>
        </header>
        <h1 className="App-intro">
          Read the quote. Who said it?
        </h1>
        <div>
          <h5>"These pretzels are making me thirsty."</h5>
          <button onClick> Tell Me!</button>
          <button onClick> Hide Answer</button>
          <button onClick> Edit </button>
          <button onClick> Delete </button>
        </div>
        <FlashcardForm />
      </div>
    );
  }
}

export default App;
