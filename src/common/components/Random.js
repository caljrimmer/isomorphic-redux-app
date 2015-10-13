import React, { Component, PropTypes } from 'react';

class Random extends Component {

  constructor(props) {
    super(props);
    this.props.setRandom(this.props.random);
  }

  componentWillMount() {
    if(this.props.routeParams.random != this.props.random){
      this.props.setRandom(this.props.routeParams.random);
    }
  }

  render() {
    const { incrementRandom, decrementRandom, random } = this.props;
    return (
      <p>
        Clicked: {random} times
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
  //Can be provided via routing and thus a string
  random: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export default Random;