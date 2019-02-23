import { connect } from 'react-redux';
import App from '../App';
import { fetchRecommendations } from '../../store/actions/userRecommendationsActions';

const mapStateToProps = state => {
  return {
    userRecommendations: state.userRecommendations,
  };
};

const mapDispatchToProps = { fetchRecommendations };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
