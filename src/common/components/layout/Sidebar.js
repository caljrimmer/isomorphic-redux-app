import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {

  render() {
    return (

      	<div className="sidebar">

		  <div className="sidebar-item">
		    <p>A reserved <a href="http://jekyllrb.com" target="_blank">Jekyll</a> theme that places the utmost gravity on content with a hidden drawer. Made by <a href="https://twitter.com/mdo" target="_blank">@mdo</a>.</p>
		  </div>

		  <nav className="sidebar-nav">
		    <a className="sidebar-nav-item active" href="/">Home</a>
			<a className="sidebar-nav-item" href="/counter">Counter</a>
			<a className="sidebar-nav-item" href="/random">Random</a>
		    <span className="sidebar-nav-item">Currently v1.0.0</span>
		  </nav>

		  <div className="sidebar-item">
		    <p>
		      © 2015. All rights reserved.
		    </p>
		  </div>

		</div>
    );
  }
}

export default Sidebar;