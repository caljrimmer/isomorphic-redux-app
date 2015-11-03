import React from 'react';
import addons from 'react/addons';
import expect from 'expect';
import { bindActionCreators } from 'redux';

import App from '../../src/common/containers/App';
import { Provider } from 'react-redux';
import configureStore from '../../src/common/store/configureStore';

const TestUtils = React.addons.TestUtils;

describe('Layout State', function(){

  before('render and locate element', function() {
    const store = configureStore({});
    const renderedComponent = TestUtils.renderIntoDocument(
         <App store={store} />
    );
    this.store = renderedComponent.store;
    this.dispatchProps = renderedComponent.dispatchProps;
  });

  it('layout state should exist', function() {
    expect(this.store.getState().layout).toExist();
  });

  it('dispatch TOGGLE_SIDEBAR, state should change layout state', function() {
    expect(this.store.getState().layout.present.sidebarOpen).toBe(false);
    this.dispatchProps.toggleSidebar(true);
    expect(this.store.getState().layout.present.sidebarOpen).toBe(true);
  });

  it('dispatch UNDO, state should change layout state', function() {
    this.dispatchProps.undo();
    expect(this.store.getState().layout.present.sidebarOpen).toBe(false);
  });

  it('dispatch REDO, state should change layout state', function() {
    this.dispatchProps.redo();
    expect(this.store.getState().layout.present.sidebarOpen).toBe(true);
  });

});