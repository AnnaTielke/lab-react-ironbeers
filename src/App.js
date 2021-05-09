import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Beers from './components/Beers';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
        </Switch>
      </div>
    );
  }
}

export default App;
