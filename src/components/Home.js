import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newbeer from '../assets/new-beer.png';
import randombeer from '../assets/random-beer.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <img src={beers} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link to={`/beers`}>
              <h1 className="card-title">All Beers</h1>
            </Link>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div className="card mb-3">
          <img src={randombeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link to={`/random-beer`}>
              <h1 className="card-title">Random Beer</h1>
            </Link>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div className="card mb-3">
          <img src={newbeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link to={`/new-beer`}>
              <h1 className="card-title">New Beer</h1>
            </Link>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
