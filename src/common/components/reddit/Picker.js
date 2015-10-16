import React, { Component, PropTypes } from 'react';

export default class Picker extends Component {
  render () {
    const { value, onChange, options } = this.props;

    return (
      <div className="posts-header">
        <h1>Reddit API</h1>
        <p>Posts for <select onChange={e => onChange(e.target.value)}
                value={value}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select></p>
      </div>
    );
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};