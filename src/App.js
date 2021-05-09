import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Beers from './components/Beers';
import Home from './components/Home';
import BeerDetail from './components/BeerDetail';

import axios from 'axios';

class App extends Component {
  state = {
    allbeers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data);
        this.setState({ allbeers: response.data });
      })
      .catch(() => {
        console.log('crashed');
      });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/beers"
            render={() => {
              return <Beers allbeers={this.state.allbeers} />;
            }}
          />
          <Route path="/beers/:id" component={BeerDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
