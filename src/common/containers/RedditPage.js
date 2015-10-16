import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Reddit from '../components/Reddit';
import * as RedditActions from '../actions/reddit';

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RedditActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Reddit);