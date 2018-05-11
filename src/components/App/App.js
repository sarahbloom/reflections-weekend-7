import React, { Component } from 'react';
import './App.css';
import ReflectionsList from '../ViewReflections/ViewList/ViewList.js';
import AddReflection from '../AddReflection/AddForm/AddForm.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Oh, the places you've been</h1>
            <h4><i>Reflection Board</i></h4>
            <Link to='/'>
              <Button variant="raised" color="primary"> Add a reflection </Button>
            </Link> &nbsp;
            <Link to='/view'>
              <Button variant="raised" color="primary"> View all reflections </Button>
            </Link>
          </header>
          <br/>
          <Route exact path = '/' component={AddReflection} />
          <Route exact path='/view' component={ReflectionsList} />
        </div>
      </Router>
    );
  }
}

export default App;
