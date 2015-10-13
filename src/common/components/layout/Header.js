import React, { Component, PropTypes } from 'react';

class Header extends Component {

  render() {
    return (
      	<div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">App</a>
			    <small>An app built with react and redux</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;