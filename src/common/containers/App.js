import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import * as UserActions from '../actions/user';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
	    <div>
        <ul>
          <li><Link to="/random" activeClassName="active">Random</Link></li>
          <li><Link to="/counter" activeClassName="active">Counter</Link></li>
        </ul>
        {this.props.children}
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
