import React, { Component, PropTypes } from 'react';

class Header extends Component {

  render() {
  	let {counter, todos} = this.props;
    return (
      	<div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Redux Universal</a>
			    <small>Click on menu icon to get started</small>
			    <span className="counter-indicator">{`Counter : ${counter}`}</span>
			    <span className="todo-indicator">{`Todos : ${todos.length}`}</span>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;