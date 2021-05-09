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
    console.log('look at the state');
    console.log(this.state.beer);
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.beer;
    return (
      <div>
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

export default BeerDetail;
