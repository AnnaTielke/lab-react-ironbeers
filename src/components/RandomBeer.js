import axios from 'axios';
import React, { Component } from 'react';
import Header from './Header';

class RandomBeer extends Component {
  state = {
    randomBeer: [],
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        this.setState({ randomBeer: response.data });
      })
      .catch(() => {
        console.log('crashed');
      });
  }

  render() {
    console.log('the state of a random beer');
    console.log(this.state.randomBeer);

    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.randomBeer;

    return (
      <div>
        <Header />
        <div className="card" style={{ width: '18rem' }}>
          <img src={image_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>{attenuation_level}</p>
            <p className="card-text">{tagline}</p>
            <p>{first_brewed}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{description}</li>
            <li className="list-group-item">{contributed_by}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default RandomBeer;
