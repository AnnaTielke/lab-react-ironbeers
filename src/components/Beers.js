import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class Beers extends Component {
  render() {
    const { allbeers } = this.props;

    return (
      <div>
        <Header />
        {allbeers.map((beer, i) => {
          console.log(beer);
          return (
            <div className="card" style={{ width: '30rem' }}>
              <img
                src={beer.image_url}
                style={{ width: '10rem' }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" key={i}>
                <h5 className="card-title">
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </h5>
                <p className="card-text">{beer.tagline}</p>
                <p className="card-text">{beer.contributed_by}</p>
              </div>
            </div>
          );
        })}
        test
      </div>
    );
  }
}

export default Beers;
