import {
  SELECT_REDDIT,
  INVALIDATE_REDDIT,
  POSTS_GET, POSTS_GET_REQUEST, POSTS_GET_SUCCESS, POSTS_GET_FAILURE
} from '../actions/reddit';

function posts(state = {
  error: {},
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
  case INVALIDATE_REDDIT:
    return Object.assign({}, state, {
      didInvalidate: true
    }); 
  case POSTS_GET_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case POSTS_GET_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    });
  case POSTS_GET_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false
    });
  default:
    return state;
  }
}

export function selectedReddit(state = 'reactjs', action) {
  switch (action.type) {
  case SELECT_REDDIT:
    return action.reddit;
  default:
    return state;
  }
}

export function postsByReddit(state = { }, action) {
  switch (action.type) {
  case INVALIDATE_REDDIT:
  case POSTS_GET_REQUEST:
  case POSTS_GET_SUCCESS:
    let postsArray = [];
    if(action.req && action.req.data){
      let data = action.req.data.data;
      postsArray = data.children.map(child => child.data);
    }
    return Object.assign({}, state, {
      [action.reddit]: posts(state[action.reddit], {
        type: action.type,
        reddit: action.reddit,
        posts: postsArray,
        receivedAt: Date.now()
      })
    });

  case POSTS_GET_FAILURE:
    return Object.assign({}, state, {
      [action.reddit]: posts(state[action.reddit], {
        type: action.type,
        reddit: action.reddit,
        posts: [],
        receivedAt: Date.now(),
        error : {
          status: action.error.status,
          statusText : action.error.statusText
        }
      })
    });

  default:
    return state;
  }
}