import React, { Component, PropTypes } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { incrementCounter, decrementCounter, counter } = this.props;
    return (
      <div className="posts">
        <h1>Counter</h1>
        <p>This counter is here to show the state is conserved as you navigate through the app.</p> 
        <p>
          <b>Counter: {counter} times</b>
          {' '}
          <button onClick={incrementCounter}>+</button>
          {' '}
          <button onClick={decrementCounter}>-</button>
        </p>
      </div>
      
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