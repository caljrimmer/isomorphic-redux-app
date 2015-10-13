import React, { Component, PropTypes } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.props.setCounter(this.props.counter);
  }

  componentWillMount(nextProps) {
    if (this.props.routeParams.random != this.props.counter) {
      this.props.setCounter(this.props.routeParams.counter);
    }
  }

  render() {
    const { incrementCounter, decrementCounter, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
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
  //Can be provided via routing and thus a string 
  counter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export default Counter;