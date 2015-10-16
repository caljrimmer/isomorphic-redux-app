import React, { Component } from 'react';
import { Link } from 'react-router';

class Error404 extends Component {

  render() {
    return (
      	<div className="page">
  			<h1 className="page-title">404: Page not found</h1>
	  		<p className="lead">Sorry, we've misplaced that URL or it's pointing to something that does not exist.</p>
			<p><Link to="/home" className="sidebar-nav-item" activeClassName="active">&gt; Head back home</Link></p>
		</div>
    );
  }
}

export default Error404;

