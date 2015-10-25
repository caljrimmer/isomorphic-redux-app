import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Sidebar extends Component {

  constructor(props){
	super(props);
  }

  render() {

  	const {version,user} = this.props;

    return (

    	<div className="sidebar">

		  <div className="sidebar-item">
		    <p>This is an example of a website built with redux and react</p>
		    <p>Logged in as <b>{user.name}</b></p>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" activeClassName="active">Home <span className="nav-note">[static]</span></Link>
		    <Link to="/reddit" className="sidebar-nav-item" activeClassName="active">Reddit <span className="nav-note">[api]</span></Link>
		    <Link to="/todo" className="sidebar-nav-item" activeClassName="active">Todo <span className="nav-note">[stateful]</span></Link>
		    <Link to="/counter" className="sidebar-nav-item" activeClassName="active">Counter <span className="nav-note">[stateful]</span></Link>
		    <Link to="/about" className="sidebar-nav-item" activeClassName="active">About <span className="nav-note">[static]</span></Link>
		    <span className="sidebar-nav-item"><span className="nav-note">{`Currently version ${version}`}</span></span>
		  </nav>

		  <div className="sidebar-item sidebar-footer">
		    <p>
				Visit <a href="https://github.com/caljrimmer/simple-redux-boiler">GitHub Repo</a><br/>
				Based on <a href="http://lanyon.getpoole.com/"> Lanyon Theme</a> 
		    </p>
		  </div>

		</div>
    );
  }
}

export default Sidebar;