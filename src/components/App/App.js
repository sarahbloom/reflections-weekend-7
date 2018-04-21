import React, { Component } from 'react';
import './App.css';
import ReflectionsList from '../ViewReflections/ViewList/ViewList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Oh, the places you've been</h1>
          <h4><i>Reflection Board</i></h4>
        </header>
        <br/>
        <ReflectionsList />
      </div>
    );
  }
}

export default App;
