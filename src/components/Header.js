import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link to={`/`}>
              <h1 className="card-title">Home</h1>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
