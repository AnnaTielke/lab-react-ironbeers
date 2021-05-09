import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class NewBeer extends Component {
  render() {
    const { onAdd } = this.props;
    return (
      <div>
        <form onSubmit={onAdd}>
          <input name="name" type="text" placeholder="Enter name" />
          <input name="tagline" type="text" placeholder="Enter tagline" />
          <input
            name="description"
            type="text"
            placeholder="Enter description"
          />
          <input
            name="first_brewed "
            type="text"
            placeholder="Enter first brewed "
          />
          <input
            name="brewers_tips "
            type="text"
            placeholder="Enter brewers tips "
          />
          <input
            name="attenuation_level"
            type="number"
            placeholder="Enter attenuation level"
          />
          <input
            name="contributed_by "
            type="text"
            placeholder="Enter contributed by "
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
