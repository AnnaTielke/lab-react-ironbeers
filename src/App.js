import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Beers from './components/Beers';
import Home from './components/Home';
import BeerDetail from './components/BeerDetail';

import axios from 'axios';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

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

  handleAdd = (e) => {
    e.preventDefault();
    //target NAME comes from the name in submit form
    let newBeer = {
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      first_brewed: e.target.first_brewed.value,
      brewers_tips: e.target.brewers_tips.value,
      attenuation_level: e.target.attenuation_level.value,
      contributed_by: e.target.tagline.value,
    };
    //update DB
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((res) => {
        this.setState(
          {
            allbeers: [res.data, ...this.state.allbeers],
          },
          () => {
            this.props.history.push('/');
          }
        );
      })
      .catch(() => {
        console.log('Adding beer failed');
      });
  };

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
          <Route path="/random-beer" component={RandomBeer} />
          <Route
            path="/new-beer"
            render={() => {
              return <NewBeer onAdd={this.handleAdd} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
