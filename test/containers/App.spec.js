import React from 'react';
import addons from 'react/addons';
import expect from 'expect';

import App from '../../src/common/containers/App';
import { Provider } from 'react-redux';
import configureStore from '../../src/common/store/configureStore';

const TestUtils = React.addons.TestUtils;

describe('Sidebar component', function(){

  

  before('render and locate element', function() {
    const store = configureStore({});

    const renderedComponent = TestUtils.renderIntoDocument(
      <Provider store={store}>
        {()=>
    	   <App />
        }
      </Provider>
    );

    const sidebar = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'sidebar'
    );

    const sidebarToggle = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'sidebar-toggle'
    );

    this.renderedComponent = renderedComponent;
    this.store = renderedComponent.store;
    this.sidebar = sidebar.getDOMNode();
    this.sidebarToggle = sidebarToggle.getDOMNode();

  });

  it('sidebar should exist', function() {
    expect(this.sidebar).toExist();
  });

  it('sidebar should be closed', function() {
    expect(this.sidebar.getAttribute('class')).toBe('sidebar');
  });

  it('sidebar toggle should exist', function() {
    expect(this.sidebarToggle).toExist();
  });

  it('clicking sidebar toggle should open sidebar', function() {
    TestUtils.Simulate.click(this.sidebarToggle);
    this.renderedComponent.state = this.store.getState();
    expect(this.sidebar.getAttribute('class')).toBe('sidebar open');
  });


});