import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Picker from './reddit/Picker';
import Posts from './reddit/Posts';

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { selectedReddit } = this.props;
    this.props.fetchPostsIfNeeded(selectedReddit);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { selectedReddit } = nextProps;
      this.props.fetchPostsIfNeeded(selectedReddit);
    }
  }

  handleChange(nextReddit) {
    this.props.selectReddit(nextReddit);
  }

  handleRefreshClick(e) {
    e.preventDefault();
    const { selectedReddit } = this.props;
    this.props.invalidateReddit(selectedReddit);
    this.props.fetchPostsIfNeeded(selectedReddit);
  }

  render () {
    const { selectedReddit, posts, isFetching, lastUpdated, error } = this.props;
    return (
      <div>
        <Picker value={selectedReddit}
                onChange={this.handleChange}
                options={['reactjs', 'frontend']} />
        <p className="post-tag">
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href='#'
               onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isFetching && posts.length === 0 &&
          <h3>Loading...</h3>
        }
        {!isFetching && error && posts.length === 0 &&
          <h3 className="post-error">There has been an Error</h3>
        }
        {!isFetching && !error && posts.length === 0 &&
          <h3>Empty</h3>
        }
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    );
  }
}

Reddit.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number
};

export default Reddit;