import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Random from '../components/Random';
import * as RandomActions from '../actions/random';

function mapStateToProps(state) {
  return {
    random: state.random
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RandomActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);