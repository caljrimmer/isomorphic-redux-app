import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as UserActions from '../actions/user';
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    const { user } = this.props;

    return (
      <div>
        <input type="checkbox" className="sidebar-checkbox" />
        <Sidebar user={user} />
  	    <div className="wrap">
          <Header user={user} />
          <div className="container content">
            <ul>
              <li><Link to="/random" activeClassName="active">Random</Link></li>
              <li><Link to="/counter" activeClassName="active">Counter</Link></li>
            </ul>
            {this.props.children}
          </div>
        </div>
        <label for="sidebar-checkbox" className="sidebar-toggle"></label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  	user : state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
