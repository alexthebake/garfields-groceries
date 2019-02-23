import { connect } from 'react-redux';
import App from '../App';
import { fetchRecommendations } from '../../store/actions/userRecommendationsActions';

const mapStateToProps = state => {
  return {
    userRecommendations: state.userRecommendations,
  };
};

// This apparently is some redux magic...
// Normally I would write something that uses `bindActionCreators` but this
// seemed simple enough for the challenge.
const mapDispatchToProps = { fetchRecommendations };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
