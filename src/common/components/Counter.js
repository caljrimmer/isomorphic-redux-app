import React, { Component, PropTypes } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { incrementCounter, decrementCounter, counter } = this.props;
    return (
      <p>
        Counter: {counter} times
        {' '}
        <button onClick={incrementCounter}>+</button>
        {' '}
        <button onClick={decrementCounter}>-</button>
      </p>
    );
  }
}

Counter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;