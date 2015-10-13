import React, { Component, PropTypes } from 'react';

class Random extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { incrementRandom, decrementRandom, random } = this.props;
    return (
      <p>
        Random: {random} times
        {' '}
        <button onClick={incrementRandom}>+</button>
        {' '}
        <button onClick={decrementRandom}>-</button>
      </p>
    );
  }
}

Random.propTypes = {
  incrementRandom: PropTypes.func.isRequired,
  decrementRandom: PropTypes.func.isRequired,
  random: PropTypes.number.isRequired
};

export default Random;