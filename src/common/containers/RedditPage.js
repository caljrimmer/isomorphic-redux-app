import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Reddit from '../components/Reddit';
import * as RedditActions from '../actions/reddit';

//Data that needs to be called before rendering the component
//This is used for server side rending via the fetchComponentDataBeforeRending() method
Reddit.need = [
  RedditActions.fetchPosts
]

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state;
  const {
    isFetching,
    lastUpdated,
    error,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    error:false,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RedditActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Reddit);