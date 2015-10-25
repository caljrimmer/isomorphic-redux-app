import React, { Component, PropTypes } from 'react';

class Header extends Component {

  render() {
  	const {counter, todos} = this.props;
  	const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    );
    const activeCount = todos.length - completedCount;


    return (
      	<div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Redux Universal</a>
			    <small>Click on menu icon to get started</small>
			    <span className="counter-indicator">{`Counter : ${counter}`}</span>
			    <span className="todo-indicator">{`Todos : ${activeCount}`}</span>
			  </h3>
			</div>
		</div>
    );
  }
}

Header.propTypes = {
  counter: PropTypes.number.isRequired,
  todos: PropTypes.array.isRequired
};

export default Header;