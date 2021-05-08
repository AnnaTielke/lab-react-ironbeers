import React, { Component } from 'react';
import { Router } from 'react-router';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Router />
      </div>
    );
  }
}

export default App;
