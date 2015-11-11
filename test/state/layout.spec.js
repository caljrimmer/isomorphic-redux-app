import React from 'react';
import addons from 'react/addons';
import expect from 'expect';

import * as LayoutActions from '../../src/common/actions/layout';
import configureStore from '../../src/common/store/configureStore';

describe('Layout State', function(){

  before('render and locate element', function() {
    const store = configureStore({});
    this.store = store;
  });

  it('layout state should exist', function() {
    expect(this.store.getState().layout).toExist();
  });

  it('layout state to instansiate with...', function() {
    expect(this.store.getState().layout.present).toEqual({
      sidebarOpen : false
    });
  });

  it('dispatch TOGGLE_SIDEBAR, state should change layout state', function() {
    expect(this.store.getState().layout.present).toEqual({
      sidebarOpen : false
    });
    this.store.dispatch(LayoutActions.toggleSidebar(true));
    expect(this.store.getState().layout.present).toEqual({
      sidebarOpen : true
    });
  });

  it('dispatch UNDO, state should change layout state', function() {
    this.store.dispatch(LayoutActions.undo());
    expect(this.store.getState().layout.present).toEqual({
      sidebarOpen : false
    });
  });

  it('dispatch REDO, state should change layout state', function() {
    this.store.dispatch(LayoutActions.redo());
    expect(this.store.getState().layout.present).toEqual({
      sidebarOpen : true
    });
  });

});