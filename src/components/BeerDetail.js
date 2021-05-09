import React, { Component } from 'react';
import axios from 'axios';

class BeerDetail extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    let beerId = this.props.match.params.id;
    console.log('HEEERREEE');
    console.log(this.props);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch(() => {
        console.log('crashed');
      });
  }

  render() {
    return <div></div>;
  }
}

export default BeerDetail;
