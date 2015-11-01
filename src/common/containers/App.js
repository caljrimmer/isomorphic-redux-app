import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as UserActions from '../actions/user';
import * as LayoutActions from '../actions/layout';
import Home from '../components/Home'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

class App extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
    this.eventUndo = this.eventUndo.bind(this)
    this.eventRedo = this.eventRedo.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  eventUndo(e) {
    e.preventDefault();
    this.props.undo();
  }

  eventRedo(e) {
    e.preventDefault();
    this.props.redo();
  }

  render() {

    const { user,layout, version, counter, todos } = this.props;
    const { sidebarOpen } = layout;
    const layoutClass = classNames('wrapper',{open : sidebarOpen});

    return (
      <div className={layoutClass}>
        <Sidebar layout={layout} user={user} version={version} />
  	    <div className="wrap">
          <Header todos={todos} counter={counter} />
          <div className="container content">
            {!this.props.children && <Home />}
            {this.props.children}
          </div>
        </div>
        <label className="sidebar-toggle" onClick={this.eventToggleSidebar}></label>
        <label className="undo-button" onClick={this.eventUndo}>&lt;</label>
        <label className="redo-button" onClick={this.eventRedo}>&gt;</label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter : state.counter.present,
    todos : state.todos.present,
    version : state.version,
  	user : state.user,
    layout : state.layout.present
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
